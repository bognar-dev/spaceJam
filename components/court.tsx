"use client"


import * as React from "react";
import { Player } from "@/types/player";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

interface CourtProps {
    teamName: string;
    players: Player[];
}

export function Court({ teamName, players }: CourtProps) {
    return (

            <Card className="">
                <CardHeader className="flex items-center justify-center">
                    <CardTitle className="text-5xl">{teamName}</CardTitle>
                </CardHeader>
                <CardContent className="relative flex items-center justify-center m-36">
                    
                    <ul className="grid gap-6 2xl:grid-flow-col grid-flow-row z-10">
                        {players.map((player) => (

                            <li key={player.id}>
                                <Avatar>
                                    <AvatarImage className="rounded-full aspect-auto h-30 w-30" src={player.img} />
                                    <AvatarFallback>{player.name}</AvatarFallback>
                                </Avatar>
                                <span className="text-xl text-primary">{player.name}</span>

                                <div>{player.description}</div>

                            </li>
                        ))}
                    </ul>
                    <Icons.court className="fill-accent absolute justify-center w-3/4  m-10"></Icons.court>
                </CardContent>
            </Card>

    );
}
