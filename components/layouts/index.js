import Header from "../layouts/header";
const Layout = ({ data, children }) => {
  return (
    <>
      <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
      <div>{children}</div>
    </>
  );
};
export default Layout;
