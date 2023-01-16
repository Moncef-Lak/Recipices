import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(true);
    console.log(
      "%cHello to LM for Recipes ",
      "font-weight: bold; font-size: 50px;color:#F00754; text-shadow: 3px 3px 0 #bb042e , 6px 6px 0 #be0542 , 9px 9px 0 #85042e; margin-bottom: 12px; padding: 5%"
    );
    console.log(
      "%cmoncef.lakehal@outlook.com",
      "font-weight: bold; font-size: 20px;background: linear-gradient(45deg,#bdc3c7,#2c3e50);color:#fff;margin: 1rem; padding: 3.5%"
    );
    console.log(
      "%cMy Linkedin https://www.linkedin.com/in/moncefdev/",
      "font-weight: bold; font-size: 20px;background: linear-gradient(45deg,#0a66c2,#ddd);color:#fff;margin: 1rem; padding: 3.5%"
    );
    console.log(
      "%cMy GitHub https://github.com/MoncefDeveloper",
      "font-weight: bold; font-size: 20px;background: linear-gradient(45deg,#f05133,#fff);color:#fff;margin: 1rem; padding: 3.5%"
    );
    console.log(
      "%cMy website https://moncefdev.site",
      "font-weight: bold; font-size: 20px;background: linear-gradient(45deg,#159,#f59);color:#fff;margin: 1rem; padding: 3.5%"
    );
  }, []);

  if (!isStart) return null;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
