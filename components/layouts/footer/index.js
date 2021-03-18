import { sanitize } from "../../utils/miscellaneos";
const Footer = ({ footer }) => {
  return (
    <>
      <footer className="bg-green-400">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="  text-white lg:w-1/2">
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize(footer?.sidebarOne)
                }}
              />
            </div>
            <div className="lg:w-1/2">
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize(footer?.sidebarTwo)
                }}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
