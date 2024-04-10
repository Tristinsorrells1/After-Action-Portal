import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.modules.scss";

function Navbar() {
  return (
    <section className="nav-and-header-container">
      <nav>
        <Link href="/" style={{ position: "relative", width: "95%", height: "50px", margin: "10px auto" }}>
          <Image
            src="/logo.png"
            alt="Ascent Integrated Tech Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
        <div className="navbar-sections-container">
          <div className="navbar-section">
            <span className="navbar-section-header">Incidents</span>
            <li className="navbar-li">
              <Link className={"navbar-text"} href="/dashboard">
                Last Incident
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="navbar-text" href="/dashboard">
                All Incidents
              </Link>
            </li>
            <span className="navbar-divider"></span>
          </div>
          <div className="navbar-section">
            <span className="navbar-section-header">Devices</span>
            <li className="navbar-li">
              <Link className="navbar-text" href="/dashboard">
                All Devices
              </Link>
            </li>
            <span className="navbar-divider"></span>
          </div>
        </div>
        <div className="navbar-section">
          <span className="navbar-section-header">Account</span>
          <li className="navbar-li">
            <Link className="navbar-text" href="/profile">
              Profile
            </Link>
          </li>
          <li className="navbar-li">
            <Link className={"navbar-text"} href="/dashboard">
              Logout
            </Link>
          </li>
        </div>
      </nav>
      <div className="nav-header">
        <h2 className="welcome-text">Welcome Chief</h2>
        <span className="header-divider"></span>
      </div>
    </section>
  );
}

export default Navbar;
