import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';


const YT_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?(?:.*[&])?v=))([a-zA-Z0-9_-]{11})/;


const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req:NextRequest) {
    
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYt = data.url.match(YT_REGEX);

        if(!isYt){
            return NextResponse.json({
            message:"Incorrect URL"
            },{
            status:411
            })
        }

        const extractedId = data.url.split("?v=")[1];

        const stream = await prismaClient.stream.create({
            data:{
                userId:data.creatorId,
                url: data.url,
                extractedId,
                type:"Youtube"
            }
        })
        return NextResponse.json({
            messsage:"Link Successfull",
            id:stream.id
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error while adding a stream"
        },{
            status:411
        })
    }
}

export async function GET(req:NextRequest) {
    const creatorId = req.nextUrl.searchParams.get("creatorId")
    const streams = await prismaClient.stream.findMany({
        where:{
            userId: creatorId ?? ""
        }
    })
    return NextResponse.json({
        streams
    },{
        status:200
    })
}