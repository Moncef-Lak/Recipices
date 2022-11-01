import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(true);
  }, []);

  if (!isStart) return null;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
