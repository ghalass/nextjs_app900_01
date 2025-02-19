import Link from "next/link";
import Navauth from "./Navauth";
import Navitem from "./Navitem";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          <Link className={`navbar-brand`} href={"/"}>
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Navitem />

            {/* AUTH */}
            <Navauth />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
