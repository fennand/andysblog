// Header Component
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative">
      <img src="../football.png" className="imgball" />

      <Link href="/">
        <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="../wordart.png" className="w-3/4" />
        </div>
      </Link>
    </div>
  );
}
