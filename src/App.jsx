import "./App.css";
import Footer from "./components/Footer";
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <QRCodeGenerator />
      <Footer />
    </div>
  );
}

export default App;
