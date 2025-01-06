import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import logoImage from "../assets/logo.png"; // Ruta del logo grande
import logoQR from "../assets/logoqr.png"; // Logo que irá en el centro del QR
import { Button } from "react-bootstrap";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const downloadCanvasRef = useRef();

  const handleDownload = () => {
    const qrCanvas = document.querySelector("canvas");
    const downloadCanvas = downloadCanvasRef.current;
    const ctx = downloadCanvas.getContext("2d");

    // Ajustar el tamaño del lienzo auxiliar al tamaño del QR
    const canvasWidth = qrCanvas.width;
    const canvasHeight = qrCanvas.height;
    downloadCanvas.width = canvasWidth;
    downloadCanvas.height = canvasHeight;

    // Dibujar el QR en el lienzo auxiliar
    ctx.drawImage(qrCanvas, 0, 0);

    // Dibujar el logo sobre el QR
    const logo = new Image();
    logo.src = logoQR;
    logo.onload = () => {
      const logoSize = canvasWidth * 0.2; // Tamaño relativo del logo
      const centerX = (canvasWidth - logoSize) / 2;
      const centerY = (canvasHeight - logoSize) / 2;

      // Crear un fondo blanco circular detrás del logo
      ctx.beginPath();
      ctx.arc(centerX + logoSize / 2, centerY + logoSize / 2, logoSize / 2, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff"; // Fondo blanco
      ctx.fill();

      // Dibujar el logo con bordes redondeados
      ctx.drawImage(logo, centerX, centerY, logoSize, logoSize);

      // Descargar el lienzo como imagen
      const link = document.createElement("a");
      link.download = "codigo-qr-con-logo.png";
      link.href = downloadCanvas.toDataURL("image/png");
      link.click();

      // Limpiar el input después de descargar
      setUrl("");
    };
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img
        style={{ maxWidth: "100%", height: "auto", width: "400px" }}
        src={logoImage}
        alt="logo"
      />
      <h5 className="mt-5">Generador de Código QR</h5>

      <h6>¿Cómo usarlo?</h6>
      <article className="mb-5 mt-4">
        <h6>
          1. Copia el enlace de la red social o página web (YouTube, Facebook,
          Twitter, etc.).
        </h6>
        <h6>
          2. Pega el enlace en el campo de texto con la leyenda <b>"Ingresa tu enlace".</b>
        </h6>
        <h6>
          3. Verás el código QR generado automáticamente como una previsualización.
        </h6>
        <h6>
          4. Haz clic en el botón "Descargar QR con Logo" para guardarlo como imagen.
        </h6>
      </article>

      <input
        type="text"
        placeholder="Ingresa tu enlace"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "14px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "5px",
          borderColor: "#cccccc",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      />
      {url && (
        <div style={{ marginBottom: "20px" }}>
          {/* Vista previa */}
          <QRCodeCanvas
            value={url}
            size={256}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            includeMargin={true}
            level={"H"} // Nivel alto de corrección de errores
            style={{
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      )}
      {url && (
        <Button onClick={handleDownload} className="button-download">
          Descargar QR con Logo
        </Button>
      )}
      {/* Lienzo auxiliar para preparar la descarga */}
      <canvas ref={downloadCanvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

export default QRCodeGenerator;
