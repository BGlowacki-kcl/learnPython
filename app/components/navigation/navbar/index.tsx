import React from "react";
import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <>
            <div className="w-full h-20 bg-emerald-800 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <li>
                                <Link href="/about">
                                    <p>About us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/signin">
                                    <p>Sign In</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>Sign Up</p>
                                </Link>
                            </li>
                            
                        </ul>
                        <ul className="md:flex gap-x-6">
                            <li>
                                <Link href="/signin">
                                    <button className="h-12 rounded-lg bg-white font-bold px-5">
                                        <p className="text-emerald-800">Sign In</p>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/signup">
                                    <button className="h-12 rounded-lg bg-white font-bold px-5">
                                        <p className="text-emerald-800">Sign Up</p>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;