"use client"
import Image from "next/image";
import play from "@/app/assets/play.png"
import pause from "@/app/assets/pause.png"
import next from "@/app/assets/play-next.png"
import previous from "@/app/assets/play-previous.png"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Musicbar() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="flex justify-center gap-2">
            <Button variant="ghost">
                <Image src={previous} alt="previous" width={40} />
            </Button>
            <Button variant="ghost" onClick={() => setIsPlaying((prev) => !prev)}>
                <Image src={isPlaying ? pause : play} alt={isPlaying ? "pause" : "play"} width={40} />
            </Button>
            <Button variant="ghost">
                <Image src={next} alt="next" width={40} />
            </Button>
        </div>
    );
}