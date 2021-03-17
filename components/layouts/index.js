import Header from "../layouts/header";
import Head from "next/head";
import Footer from "./footer/";
const Layout = ({ data, children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={data?.header?.favicon} />
      </Head>
      <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
      <div>{children}</div>

      <Footer footer={data?.footer} />
    </>
  );
};
export default Layout;
