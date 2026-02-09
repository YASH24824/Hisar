"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hospital, ArrowRight, Calendar, MapPin, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-4 ">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div>
            

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-3xl  font-sans font-semibold mb-4 md:mb-6 text-blue-950 leading-tight">
                Serving Hisar & Surrounding Villages with{" "}
                <span className="text-blue-950">Advanced Diagnostics</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-wrap text-blue-950  mb-6 md:mb-8 leading-relaxed">
                <span className="text-blue-950 font-semibold">HISAR MEDICAL DIAGNOSTIC & HOSPITALS LLP</span> serves Hisar and
                surrounding villages with advanced diagnostic facilities. Our
                focus is early detection of cancers and other serious diseases
                through state-of-the-art X-ray and ultrasound technology.
              </p>

              {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

  {[
    {
      icon: Award,
      value: "40+",
      label: "Years Experience",
      iconColor: "text-white",
      bgColor: "bg-blue-950",
    },
    {
      icon: Users,
      value: "50k+",
      label: "Patients Served",
      iconColor: "text-white",
      bgColor: "bg-blue-950",
    },
  ].map((stat, index) => (
    <div
      key={index}
      className="bg-white/90 backdrop-blur-md
      p-5 rounded-2xl
      border border-gray-100
      shadow-md hover:shadow-lg
      transition-all duration-300"
    >
      <div className="flex items-center gap-4">

        {/* Icon Box */}
        <div
          className={`w-12 h-12 flex items-center justify-center
          rounded-xl ${stat.bgColor}`}
        >
          <stat.icon
            className={stat.iconColor}
            size={24}
          />
        </div>

        {/* Text */}
        <div>
          <div className="text-xl font-semibold text-gray-900">
            {stat.value}
          </div>

          <div className="text-wrap text-blue-950">
            {stat.label}
          </div>
        </div>

      </div>
    </div>
  ))}

</div>


              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/about-us#services"
                  className="group bg-blue-950 hover:bg-white hover:text-blue-950 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-sans font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Read More About Our Services
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about-us#contact"
                  className="group bg-blue-950  text-white hover:bg-white hover:text-blue-950 px-6 md:px-8 py-3 md:py-4 hover:shadow-lg rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base hover:border-emerald-700"
                >
                  Book Appointment
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

            {/* Hospital Building Image */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl mt-6 lg:mt-0">
              <Image
                src="/lobby.png"
                alt="Hisar Medical Diagnostic & Hospitals LLP Building"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              
              {/* Location Info */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-emerald-600/10 backdrop-blur-sm rounded-lg">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-white text-wrap md:text-xl">
                      Hisar Medical Diagnostic & Hospitals LLP
                    </h3>
                    <p className="text-white text-sm md:text-wrap">
                      Serving Hisar and surrounding villages since 2013
                    </p>
                  </div>
                </div>
                
                {/* Services Badge */}
             
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default AboutSection;