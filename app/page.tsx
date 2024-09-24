import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sm">
      <Link href="/signin">Sign in</Link>
      <Link href="/signup">Sign up</Link>
    </div>
  );
}
