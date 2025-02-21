import Navigation from "@/components/navigation/Navigation";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme='light'
          transition={Bounce}
          style={{ zIndex: "99999", top: "90px" }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
