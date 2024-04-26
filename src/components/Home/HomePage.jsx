import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";
const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Buy iPhone 14 pro"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint provident numquam expedita aperiam quasi?"
        link="/product/661d00d830104bd9f0571dd2"
        image={iphone}
      />

      {/* Feature Products */}
      <FeaturedProducts />
      {/* Hero Section */}
      <HeroSection
        title="Build the ultimate setup"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint provident numquam expedita aperiam quasi?"
        link="/product/661d00d830104bd9f0571dda"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
