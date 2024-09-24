'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import handleLogout from "@/firebase/auth/signout";

function Page() {
    const { user } = useAuthContext();
    const router = useRouter();

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    const logout = async (event) => {
        event.preventDefault();

        const { result, error } = await handleLogout();
        if (error){
            return console.log(error);
        }
        console.log(result);
        router.push("/");
    }

    return (
        <div>
            <h1>Only logged in users can view this page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Page;