import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <div className="circle">LM</div>
            <h4>cooking</h4>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>
    </div>
  );
}
