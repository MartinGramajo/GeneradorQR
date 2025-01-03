import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto">
      <h4>
        <b>IMPORTANTE</b> <br />
        El código QR generado tendrá vigencia indefinida, siempre y cuando el
        enlace utilizado no cambie.
        <br />
        Por ejemplo, si generas un QR con el enlace de un video de YouTube y
        luego el video se elimina o se modifica el enlace, el código QR dejará
        de funcionar correctamente.
      </h4>
    </div>
  );
};

export default Footer;
