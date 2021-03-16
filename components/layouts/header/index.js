import Nav from "./nav";
import { isEmpty } from "lodash";
const Header = ({ header, headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }
  return (
    <>
      <header>
        <Nav headerMenus={headerMenus} header={header} />
      </header>
    </>
  );
};

export default Header;
