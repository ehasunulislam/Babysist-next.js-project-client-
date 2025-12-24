"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({ href, children }) => {
  const pathName = usePathname();
  const isActive =
    href === "/" ? pathName === "/" : pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={`${isActive ? "text-blue-400" : ""} font-medium`}
    >
      {children}
    </Link>
  );
};

export default Links;
