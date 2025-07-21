"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const session = useSession();
    return (
        <div className="flex flex-col justify-between items-center">
            <div>
                NextMusic
            </div>
            <div>
                {session.data?.user ?
                    <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>SignOut</button>
                    :
                    <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>Signin</button>
                }
            </div>
        </div>
    );
}