"use client";

import React from "react";

const Hero = () => {
  return (
    <main
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      <div
        style={{
          maxHeight: 72,
          font: "Simplon Norm", // Make sure the font is applied correctly
          fontWeight: 400,
          fontSize: "60px", // Default font size for larger screens
          color: "#252020",
          textAlign: "center", // Center the text
        }}
      >
        DISCOVER OUR PRODUCTS
      </div>
      <div
        style={{
          font: "Simplon Norm",
          fontWeight: 400,
          fontSize: "22px", // Default font size for larger screens
          color: "#252020",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 30,
          textAlign: "center", // Center the text
        }}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid #adacac",
          marginTop: 20,
        }}
      ></div>

      {/* Mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            margin-top: 50px; // Adjust margin for mobile
          }
          .hero-title {
            font-size: 40px; // Smaller font size on mobile
          }
          .hero-description {
            font-size: 18px; // Smaller font size for description
          }
        }
      `}</style>
    </main>
  );
};

export default Hero;
