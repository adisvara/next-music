import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Vote from "./Vote";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Queue(){
    const count =10;
    const songs = [
        { title: "Scratching The Surface", artist: "Quincy Larson" },
        { title: "Take on me", artist: "a-ha" },
        { title: "Thursgutter", artist: "BSF" },
        { title: "Hurt", artist: "NIN" },
        { title: "Dope Show", artist: "Marily Manson" },
        { title: "Fetisha", artist: "Orgy" },
        { title: "Special K", artist: "Placebo" },
        { title: "Self Esteem", artist: "Offspring" }
    ];

    return(
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Now Playing</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>
                        <Button>
                            Play Next
                        </Button> 
                    </CardAction>
                </CardHeader>
               <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                <div>
                    {songs.map((song,index) => (
                        <CardContent key={index}>
                        <p >Song: {song.title}</p>
                        <div className="flex gap-4 font-semibold">
                            {count}
                        <Vote/>
                        </div>
                        </CardContent>
                ))
                }
                </div>
                </ScrollArea>
                <CardFooter>
                    <p>Add Songs</p>
                </CardFooter>
            </Card>
        </div>
    )
}