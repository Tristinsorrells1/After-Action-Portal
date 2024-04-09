import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <h2>Navbar:</h2>
      <Link className="link-text" href="/">
        Home
      </Link>
      <Link className="link-text" href="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
