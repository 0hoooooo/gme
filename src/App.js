import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";

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
        <div>
          <Header />
          <Body />
        </div>
      )}
    </div>
  );
};

export default App;
