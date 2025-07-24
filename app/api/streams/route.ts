import { prismaClient } from "@/app/lib/db";
import axios from "axios";
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
        const metadata = await getMetadata(data.url);
        console.log(metadata);
        
        const stream = await prismaClient.stream.create({
            data:{
                userId:data.creatorId,
                url: data.url,
                extractedId,
                type:"Youtube",
                title:metadata.title ?? "No Title found",
                thumbnail:metadata.thumbnail_url ?? "https://i.imgflip.com/2ztqsn.jpg"
            }
        })
        return NextResponse.json({
            messsage:"Link Successfull",
            id:stream.id
        },{
            status:200
        });
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

async function getMetadata(url: string) {
    try {
        const encodedUrl = encodeURIComponent(url);
        const requestUrl = `https://www.youtube.com/oembed?url=${encodedUrl}&format=json`;
        const result = await axios.get(requestUrl);
        return result.data;
    } catch (error) {
        console.error('Error fetching video metadata:', error);
        throw error;
    }
}