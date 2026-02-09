"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Heart,
  Stethoscope,
  Activity,
  Brain,
  Bone,
  Check,
  ArrowRight,
  Phone,
  Calendar,
  Shield,
  Clock,
  Users,
  Award,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <X className="w-8 h-8" />,
      title: "X-Ray Services",
      description: "High-quality digital X-ray with quick results",
      details: [
        "Full Body X-Ray",
        "Chest X-Ray",
        "Orthopedic X-Ray",
        "Emergency X-Ray",
      ],
      image:
        "/r1.png",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mammography",
      description: "Breast cancer screening with advanced technology",
      details: [
        "3D Mammography",
        "Breast Ultrasound",
        "Early Detection",
        "Women Specialists",
      ],
      image:"/r1.png",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Ultrasound",
      description: "Complete ultrasound services for all needs",
      details: [
        "Abdominal Scan",
        "Pelvic Ultrasound",
        "Pregnancy Scan",
        "Color Doppler",
      ],
      image:"/r1.png",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "ECG & Cardiac",
      description: "Heart health monitoring and testing",
      details: [
        "12-Lead ECG",
        "Stress Test",
        "Holter Monitoring",
        "Cardiac Screening",
      ],
      image:"/r1.png",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurology Tests",
      description: "Specialized neurological examinations",
      details: [
        "Nerve Conduction",
        "EEG Tests",
        "Brain Mapping",
        "Expert Analysis",
      ],
      image:"/r1.png",
    },
    {
      icon: <Bone className="w-8 h-8" />,
      title: "Orthopedic Imaging",
      description: "Bone and joint imaging services",
      details: [
        "Joint X-Ray",
        "Spine Imaging",
        "Fracture Detection",
        "Sports Injury",
      ],
      image:"/r1.png",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Equipment",
      description: "FDA approved modern machines",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced radiologists",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Reports",
      description: "Same day results",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Service",
      description: "10+ years experience",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Diagnostic Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced diagnostic imaging services with modern technology and
            expert care
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Details */}
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/about-us#contact"
                  className="block w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-gradient-to-br from-blue-900 to-blue-800 transition-colors flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
