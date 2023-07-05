import "../../styles/globals.css";
import { HashRouter } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
