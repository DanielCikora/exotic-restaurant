import Navigation from "@/components/navigation/Navigation";
import "../styles/globals.css";
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
