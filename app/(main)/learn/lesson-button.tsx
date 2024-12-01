'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Crown, Star } from "lucide-react";
import Link from "next/link";

type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number;

};


export const LessonButton = ({
    id,
    index,
    totalCount,
    locked,
    current,
    percentage

}: Props) => {

    const cycleLength = 8;
    const cycleIndex = index % cycleLength

    let indentationLevel;

    if (cycleIndex <= 2) {
        indentationLevel = cycleIndex
    } else if (cycleIndex <= 4 || cycleIndex <= 6) {
        indentationLevel = 4 - cycleIndex;
    } else {
        indentationLevel = cycleIndex - 8;
    }

    const rightPosition = indentationLevel * 40;
    const isFirst = index === 0;
    const isLast = index === totalCount;
    const isCompleted = !current && !locked;
    let Icon = Star;
    let href = "/lesson";

    if (isCompleted) {
        Icon = Check;
        href = `/lesson/${id}`;
    }

    if (isLast) {
        Icon = Crown
    }

    return (

        <div>
            <Link
                href={href}
                aria-disabled={locked}
                style={{ pointerEvents: locked ? "none" : "auto" }}
            >
                <div className="relative"
                    style={{
                        right: `${rightPosition}px`,
                        marginTop: isFirst && !isCompleted ? 60 : 24
                    }}
                >
                    {
                        current ?
                            (
                                <div className="h-[150px] w-[150px] relative">
                                    {/* START BUTTON */}
                                    <div className="absolute -top-10 left-3.5 px-3 py-2.5
                                    border-2 font-bold uppercase bg-white
                                    rounded-xl animate-bounce tracking-wide z-10">
                                        <span className="google-header">Start </span>
                                        <div className="absolute left-1/2 -bottom-2
                                    w-0 h-0 border-x-8 border-x-transparent 
                                    border-t-8 transform -translate-x-1/2" />
                                    </div>
                                    {/* PROGRESS BAR */}
                                    <div className="relative w-[120px] h-[120px]">
                                        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e7eb" strokeWidth="10" />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="transparent"
                                                stroke="url(#progress-gradient)"
                                                strokeWidth="10"
                                                strokeDasharray="251.2"
                                                strokeDashoffset={251.2 * (1 - percentage)} // Adjust for 60% progress
                                            />
                                            <defs>
                                                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#6366f1" />
                                                    <stop offset="100%" stopColor="#3b82f6" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute top-1/2 left-1/2 
                                            transform -translate-x-1/2 -translate-y-1/2">
                                            <Button
                                                size="rounded"
                                                variant={locked ? "locked" : "indigo"}
                                                className="h-[70px] w-[70px] border-b-8"
                                            >
                                                <Icon
                                                style={{ width:"30px", height:" 30px" }}
                                                    className={cn(
                                                        "h-10 w-10",
                                                        locked
                                                            ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                                                            : "fill-primary-foreground text-primary-foreground",
                                                        isCompleted && "fill-none stroke-[4]"
                                                    )} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ) :

                            (
                                <Button
                                    size="rounded"
                                    variant={locked ? "locked" : "indigo"}
                                    className="h-[70px] w-[70px] border-b-8"
                                >
                                    <Icon
                                        style={{ width:"30px", height:" 30px" }}
                                        className={cn(
                                            "h-10 w-10",
                                            locked
                                                ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                                                : "fill-primary-foreground text-primary-foreground",
                                            isCompleted && "fill-none stroke-[4]"
                                        )} />
                                </Button>
                            )
                    }
                </div>

            </Link>
        </div>
    );
}