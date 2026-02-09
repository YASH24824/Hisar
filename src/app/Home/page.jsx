import React from "react";
import Hero from "../components/Home/Herosection";
import AboutSection from "../components/Home/About";
import WhyChooseUs from "../components/Home/Why";
import ServicesPage from "../components/Home/Service";
import HorizontalLocationBanner from "../components/Home/Locationbanner";
import ClientTestimonials from "../components/Home/Clientreview";


export default function Home(){
    return(
        <>
        <Hero/>
        <AboutSection/>
        <WhyChooseUs/>
        <ServicesPage/>
        <HorizontalLocationBanner/>
        <ClientTestimonials/></>
    )

}