import "./App.css";
import Footer from "./components/Footer";
import QRCodeGenerator from "./components/QRCodeGenerator";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column container" style={{ minHeight: "100vh" }}>
      <QRCodeGenerator />
      <h6>
        <b>IMPORTANTE</b> <br />
        El código QR generado tendrá vigencia indefinida, siempre y cuando el
        enlace utilizado no cambie.
        <br />
        Por ejemplo, si generas un QR con el enlace de un video de YouTube y
        luego el video se elimina o se modifica el enlace, el código QR dejará
        de funcionar correctamente.
      </h6>
      <Footer />
    </div>
  );
}

export default App;
