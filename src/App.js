import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";

const App = () => {
  const [loading, setLoading] = useState(null);
  const api = async () => {
    try {
      setLoading(false);
    } catch (e) {
      setLoading(true);
    }
  };
  useEffect(() => {
    setLoading(true);
    api();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <div className="ajax-content-wrap">
            <div className="container-wrap" style={{ paddingBottom: 0 }}>
              <Body />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
