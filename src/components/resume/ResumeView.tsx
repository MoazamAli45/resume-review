"use client";
import React from "react";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
const ResumeView = () => {
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "600px",
        width: "100%",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="/resume.pdf" />
      </Worker>
    </div>
  );
};

export default ResumeView;
