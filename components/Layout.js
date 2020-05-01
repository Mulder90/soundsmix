import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, description = "" }) => (
  <>
    <Header title={title} description={description} />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
