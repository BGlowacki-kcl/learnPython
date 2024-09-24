import Image from "next/image";
import Link from "next/link";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </>    
  );
}
