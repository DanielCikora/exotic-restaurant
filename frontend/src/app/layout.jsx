import Navigation from "@/components/navigation/Navigation";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
