"use client"
import { Button } from "@/components/ui/button";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const session = useSession();
    return (
        <div className="p-2 flex justify-between items-center">
            <div className="text-amber-100 font-bold">
                NextMusic
            </div>
            <div>
                {session.data?.user ?
                    <Button  onClick={() => signOut()}>SignOut</Button>
                    :
                    <Button  onClick={() => signIn()}>Signin</Button>
                }
            </div>
        </div>
    );
}