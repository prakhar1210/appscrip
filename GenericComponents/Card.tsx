"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  imageSrc: string;
  altText: string;
  productName: string;
  onLike: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  productName,
  onLike,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(); // Trigger the parent onLike function
  };
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "300px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        height: 462,
      }}
    >
      {/* Image Section */}
      <div style={{ width: "300px", height: "320px", position: "relative" }}>
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Ensures image covers the container without distortion, may crop
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div style={{ padding: "16px" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            {productName}
          </h2>
          <FontAwesomeIcon
            icon={faHeart} // Set the icon here
            onClick={handleLike}
            style={{
              cursor: "pointer",
              color: liked ? "#f44336" : "#ccc", // Red when liked, gray when not liked
              fontSize: "32px",
            }}
          />{" "}
        </div>
      </div>
      <p style={{ fontSize: "12px", color: "#555", marginBottom: "16px" }}>
        Sign in or Create an account to see pricing
      </p>
    </div>
  );
};

export default Card;
