// src/app/api/admin/image/route.js
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import Image from "@/models/ImageSchema";
import connectDB from "@/lib/db";

// POST - Upload Image
export async function POST(req) {
  await connectDB();

  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const file = formData.get("image");

    if (!file || !title || !description) {
      return NextResponse.json(
        { success: false, message: "Image, title, description required" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => (error ? reject(error) : resolve(result))
      );
      stream.end(buffer);
    });

    const image = await Image.create({
      title,
      description,
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });

    return NextResponse.json(
      { success: true, message: "Image uploaded successfully", image },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: "Error uploading image", error: error.message },
      { status: 500 }
    );
  }
}

// GET - Fetch all images
export async function GET() {
  await connectDB();

  try {
    const images = await Image.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, images },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching images:", error);

    return NextResponse.json(
      { success: false, message: "Error fetching images" },
      { status: 500 }
    );
  }
}

// DELETE - Delete image by ID from URL
export async function DELETE(req) {
  await connectDB();
  try {
    const body = await req.json(); // parse JSON body
    const { ids } = body; // expects { ids: ["id1", "id2", ...] }

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { success: false, message: "No image IDs provided" },
        { status: 400 }
      );
    }

    // Fetch images from DB
    const images = await Image.find({ _id: { $in: ids } });

    if (images.length === 0) {
      return NextResponse.json(
        { success: false, message: "No images found" },
        { status: 404 }
      );
    }

    // Delete each image from Cloudinary
    for (const image of images) {
      await cloudinary.uploader.destroy(image.publicId);
    }

    // Delete from MongoDB
    await Image.deleteMany({ _id: { $in: ids } });

    return NextResponse.json(
      { success: true, message: `${images.length} image(s) deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Delete failed", error: error.message },
      { status: 500 }
    );
  }
}   