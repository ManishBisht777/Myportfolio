import "../styles/globals.css";
import Navbar from "../components/Navbar";
// import Navbar2 from "../components/Navbar2";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
