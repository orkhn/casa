import Header from "components/layout/header/Header";
import Footer from "components/layout/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
