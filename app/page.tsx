import Image from "next/image";
import Link from "next/link";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
    </div>    
  );
}
