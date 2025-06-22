import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Arka_Pramanik_s_Latest_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker for better Netlify compatibility
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error);
    setError("Failed to load PDF. Please try downloading it directly.");
    setLoading(false);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Col md={12} className="text-center">
              <h1 className="project-heading">
                MY <strong className="blue">RESUME</strong>
              </h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Row>
        </Container>

        <Row className="resume">
          {loading && (
            <div className="text-center">
              <p>Loading PDF...</p>
            </div>
          )}
          {error && (
            <div className="text-center">
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}
          {!error && (
            <Document 
              file={pdf} 
              className="d-flex justify-content-center"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div>Loading PDF...</div>}
              error={<div>Failed to load PDF</div>}
              options={{
                cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                cMapPacked: true,
                standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
              }}
            >
              <Page
                pageNumber={1}
                renderTextLayer={false}
                scale={width > 786 ? 1.7 : 0.6}
              />
            </Document>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
