"use client";
import React, { useState } from "react";
import LogoImage from "@/public/Logo.png";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Person2Icon from "@mui/icons-material/Person2";
import Dropdown from "@/GenericComponents/Dropdown";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languageOptions = [
    { value: "en", label: "ENG" },
    { value: "hi", label: "Hindi" },
    { value: "la", label: "Latin" },
    { value: "ar", label: "Arabic" },
  ];

  const handleLanguageChange = (selectedLanguage: string) => {
    console.log("Selected Language:", selectedLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <main
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
          color: "black",
        }}
      >
        <div>
          <Image src={LogoImage} alt="logo image" />
        </div>
        <div
          style={{
            font: "Inter",
            fontWeight: 800,
            fontSize: "36px",
            letterSpacing: "1px",
          }}
        >
          LOGO
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Hamburger Icon (visible on mobile screens) */}
          <div
            onClick={toggleMenu}
            style={{
              display: "none", // Hidden by default
              cursor: "pointer",
              fontSize: "24px",
              padding: "10px",
              gap: "24px",
            }}
            className="hamburger-menu"
          >
            &#9776; {/* Hamburger Icon */}
          </div>
          {/* Desktop Menu (visible by default) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
            className="desktop-menu"
          >
            <div>
              <SearchIcon />
            </div>
            <div>
              <FavoriteBorderIcon />
            </div>
            <div>
              <ShoppingBagIcon />
            </div>
            <div>
              <Person2Icon />
            </div>
            <div>
              <Dropdown
                options={languageOptions}
                defaultValue="en"
                label="Language"
                onChange={handleLanguageChange}
              />
            </div>
          </div>
        </div>
      </main>
      {/* Dropdown Menu (visible only when hamburger is clicked) */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "10px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
          className="dropdown-menu"
        >
          <div style={{ margin: "10px 0" }}>
            {" "}
            <SearchIcon />
          </div>
          <div style={{ margin: "10px 0" }}>
            <FavoriteBorderIcon />
          </div>
          <div style={{ margin: "10px 0" }}>
            <ShoppingBagIcon />
          </div>
          <div style={{ margin: "10px 0" }}>
            <Person2Icon />
          </div>
        </div>
      )}
      <div
        style={{
          color: "black",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: 736,
          maxHeight: 24,
          marginLeft: 450,
          gap: 64,
          marginTop: 140,
        }}
      >
        <div
          style={{
            font: "Simplon Norm",
            fontWeight: 700,
            // width: 65,
            height: 24,
            fontSize: 20,
          }}
        >
          SHOPS
        </div>
        <div
          style={{
            font: "Simplon Norm",
            fontWeight: 700,
            // width: 65,
            height: 24,
            fontSize: 20,
          }}
        >
          SKILLS
        </div>
        <div
          style={{
            font: "Simplon Norm",
            fontWeight: 700,
            // width: 65,
            height: 24,
            fontSize: 20,
          }}
        >
          STORIES
        </div>
        <div
          style={{
            font: "Simplon Norm",
            fontWeight: 700,
            // width: 65,
            height: 24,
            fontSize: 20,
          }}
        >
          ABOUT
        </div>
        <div
          style={{
            font: "Simplon Norm",
            fontWeight: 700,
            // width: 119,
            height: 24,
            fontSize: 20,
          }}
        >
          CONTACT US
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid",
          borderColor: "#adacac",
          marginTop: 80,
        }}
      ></div>
    </main>
  );
};

export default Navbar;
