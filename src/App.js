import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";
import Footer1 from "./Footer/Footer1";
import Footer2 from "./Footer/Footer2";
import Footer3 from "./Footer/Footer3";

const App = () => {
  const [loading, setLoading] = useState(false);
  const api = async () => {
    try {
      setLoading(true);
    } catch (e) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      api();
    }, 1000);
  }, [loading]);

  return (
    <div className="App">
      {loading === false ? (
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
              <Footer1 />

              {/* <Footer3 /> */}
            </div>
            <Footer2 />
          </div>
          <Footer3 />
        </div>
      )}
    </div>
  );
};

export default App;
