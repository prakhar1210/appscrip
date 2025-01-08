"use client";

import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Topbar = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
  });

  // Toggle the filter visibility on button click
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Handle changes in filter selection
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleApplyFilters = () => {
    console.log("Applied Filters:", filters);
  };

  return (
    <>
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          justifyContent: "space-between",
          alignItems: "center",
          color: "black",
          margin: 10,
          padding: 10,
          height: 88,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              font: "Simplon Norm",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Total Items
          </div>
          <div
            style={{
              font: "Adobe Caslon Pro",
              fontWeight: 400,
              cursor: "pointer",
              display: "flex",
              alignItems: "right",
            }}
            onClick={toggleFilter} // Toggle the visibility on click
          >
            <ArrowBackIosIcon />
            <p
              style={{
                borderBottom: "1px solid #888792",
                fontSize: "16px",
                color: "#888792",
              }}
            >
              {isFilterVisible ? "Hide Filter" : "Show Filter"}
            </p>
          </div>
        </div>

        {/* Dropdown Section */}
        {isFilterVisible && (
          <div
            style={{
              position: "absolute",
              top: "740px", // Adjust the top position as needed
              //   left: "96px",
              width: "300px",
              height: "846px",
              gap: "24px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              opacity: "1", // When visible, set opacity to 1
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>
              <input
                type="checkbox"
                id="all-checked"
                name="Customizable"
                checked={filters.filter1}
                onChange={handleFilterChange}
              />
              <label htmlFor="all-checked">Customizable</label>
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                IDEAL FOR
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
                <option value="hi">Men</option>
                <option value="la">Women</option>
                <option value="ar">Boys</option>
                <option value="ar">Girls</option>
              </select>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                OCCASISION
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
                <option value="hi">Wedding</option>
                <option value="la">Party</option>
                <option value="ar">Office</option>
                <option value="ar">Casuals</option>
              </select>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                WORK{" "}
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
                <option value="hi">Formal</option>
                <option value="la">Informal</option>
              </select>{" "}
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                FABRIC
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
                <option value="hi">Cotton</option>
                <option value="la">Silk</option>
                <option value="ar">Polyester</option>
              </select>{" "}
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                SEGEMENT{" "}
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
              </select>{" "}
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                SUITABLE FOR{" "}
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
                <option value="hi">Men</option>
                <option value="la">Women</option>
                <option value="ar">Boys</option>
                <option value="ar">Girls</option>
              </select>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                RAW MATERIALS{" "}
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
              </select>{" "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid",
              }}
            >
              <label
                htmlFor="language-select"
                style={{
                  font: "Simplon Norm",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#252020",
                }}
              >
                PATTERNS{" "}
              </label>
              <select id="Ideal-For" name="Ideal For" aria-label="Ideal For">
                <option value="en">All</option>
              </select>{" "}
            </div>
            <button
              style={{
                marginTop: "16px",
                padding: "8px",
                color: "black",
                border: "1px solid grey", // only one 'border' declaration
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
          </div>
        )}
        <div>
          <select
            aria-label="Choose an option"
            style={{
              width: 240,
              height: 40,
              backgroundColor: "transparent",
              font: "Simplon Norm",
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            <option value="1" style={{}}>
              Recomended
            </option>
            <option value="2">Newest First</option>
            <option value="3">Popular</option>
            <option value="4">Price: High to Low</option>
            <option value="5">Price: Low to High</option>
          </select>
        </div>
      </main>
    </>
  );
};

export default Topbar;
