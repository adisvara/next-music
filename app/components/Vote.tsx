"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import upvote from "@/app/assets/upvote.png"
import downvote from "@/app/assets/downvote.png"
import {ArrowBigDown,ArrowBigUp} from "lucide-react"
import { useState } from "react";


function onClick (){

}
export default function Vote() {
    const [upvote, setUpvote] = useState(false)
    const [downvote, setDownvote] = useState(false)
    return (
        <div className="flex space-x-2 border ">
            <Button 
                onClick={() => {
                    setUpvote((press) => !press);
                    if(downvote){
                        setDownvote((press) => !press);
                    }          
                }}   
                variant="ghost" 
                className="w-16 h-8 p-0" // Fixed width and height
            >
                <ArrowBigUp 
                    className={`${upvote ? "text-red-500" : "text-gray-500"} scale-150`} // Use scale to increase size
                />
                
            </Button>
            <Button 
                onClick={() => {
                    setDownvote((press) => !press);
                     if(upvote){
                        setUpvote((press) => !press);
                    }  
                }} 
                variant="ghost" 
                className="w-16 h-8 p-0" // Fixed width and height
            >
                <ArrowBigDown 
                    className={`${downvote ? "text-purple-500" : "text-gray-500"} scale-150`} // Use scale to increase size
                />
            </Button>
        </div>
    )
}