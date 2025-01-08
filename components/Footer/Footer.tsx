import { IconButton, TextField } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Footer = () => {
  return (
    <main
      style={{
        backgroundColor: "black",
      }}
    >
      {/* upper footer */}
      <div
        style={{
          padding: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div>
            <p
              style={{
                font: "Simplon Norm",
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              Be the first to know
            </p>
            <p
              style={{
                font: "Simplon Norm",
                fontWeight: 400,
                fontSize: 16,
                marginTop: 50,
              }}
            >
              Sign up for updates from mettā muse.
            </p>
          </div>
          <div>
            <div
              style={{
                margin: "50px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                style={{
                  marginRight: "8px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              />

              <IconButton
                color="primary"
                // variant="outlined" // 'variant' works when used without 'href'
                style={{
                  padding: "10px",
                  color: "white",
                }}
              >
                Subscribe
              </IconButton>
            </div>{" "}
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div
              style={{
                font: "Simplon Norm",
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              CONTACT US
            </div>
            <p
              style={{
                font: "Simplon Norm",
                fontWeight: 400,
                fontSize: 16,
                marginTop: 30,
              }}
            >
              +44 221 133 5360
            </p>
            <p
              style={{
                font: "Simplon Norm",
                fontWeight: 400,
                fontSize: 16,
                marginTop: 30,
              }}
            >
              customercare@mettamuse.com
            </p>
          </div>

          <div>
            <p
              style={{
                font: "Simplon Norm",
                fontWeight: 700,
                fontSize: 24,
                marginTop: 30,
              }}
            >
              CURRENCY
            </p>
            <p
              style={{
                font: "Simplon Norm",
                fontWeight: 400,
                fontSize: 16,
                marginTop: 30,
              }}
            >
              {" "}
              <FiberManualRecordIcon />
              USD
            </p>
            <p
              style={{
                font: "Simplon Norm",
                fontWeight: 400,
                fontSize: 12,
                marginTop: 30,
              }}
            >
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      {/* divider */}
      <div></div>
      {/* footer 2 */}
      <div></div>
    </main>
  );
};

export default Footer;
