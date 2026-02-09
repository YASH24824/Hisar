"use client";
import useSWR from "swr";
import {
  Loader2,
  AlertCircle,
  Image as ImageIcon,
  RefreshCw,
  Maximize2,
} from "lucide-react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GalleryPage() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/admin/image",
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 3000, // Refresh every 30 seconds
    },
  );

  const handleRefresh = () => {
    mutate();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 text-lg font-medium">
            Loading your gallery...
          </p>
          <p className="text-gray-400 text-sm mt-2">This may take a moment</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md text-center bg-white rounded-2xl shadow-lg p-8">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Unable to Load Gallery
          </h2>
          <p className="text-gray-600 mb-6">
            We encountered an error while fetching your images.
          </p>
          <button
            onClick={handleRefresh}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const images = data?.images || [];

  const handleImageClick = (imageUrl) => {
    // Open image in full screen modal
    window.open(imageUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Image Gallery
            </h1>
            <p className="text-gray-600">
              {images.length === 0
                ? "No images available"
                : `${images.length} image${images.length !== 1 ? "s" : ""} in collection`}
            </p>
          </div>

          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md"
          >
            <RefreshCw
              className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
            />
            Refresh Gallery
          </button>
        </div>

        {/* Gallery Content */}
        {images.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center border-2 border-dashed border-gray-200">
            <ImageIcon className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Gallery is Empty
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              No images have been uploaded yet. Check back later or upload some
              images to get started.
            </p>
          </div>
        ) : (
          <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((img) => (
                <div
                  key={img._id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100 cursor-pointer"
                  onClick={() => handleImageClick(img.imageUrl)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={img.imageUrl}
                      alt={img.description || "Gallery image"}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/400x300?text=Image+Not+Found`;
                      }}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-5">
                    <p className="text-gray-700 font-medium line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {img.description || "No description provided"}
                    </p>

                    {/* Metadata */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-medium">
                        {img.createdAt
                          ? new Date(img.createdAt).toLocaleDateString()
                          : "Unknown date"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Click any image to view full size</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
