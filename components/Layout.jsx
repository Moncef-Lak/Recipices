import gsap, { Power4 } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
  let title = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      title,
      1.5,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        delay: 0.3,
        y: 0,
        ease: Power4.easeOut,
      }
    );
  }, []);
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <div className="header-logo" ref={(e) => (title = e)}>
            <div className="circle">LM</div>
            <h4>cooking</h4>
          </div>
        </Link>
      </header>

      <div className="page-content">{children}</div>
    </div>
  );
}
