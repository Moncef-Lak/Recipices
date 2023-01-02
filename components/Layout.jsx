import gsap, { Power4 } from "gsap";
import Image from "next/image";
import Link from "next/link";
import background from "./../public/food-cooking-background-stone-texture-with-sea-salt-pepper-garlic-parsley-light-grey-abstract-food-background-empty-space-text-can-be-used-food-posters-design-menu-top-view_253362-16400.jpg";
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
      <div className="layout-background">
        <Image
          src={background}
          priority
          fill
          alt="background"
          quality={1}
          style={{ objectFit: "cover", filter: "blur(20px)" }}
        />
      </div>
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
