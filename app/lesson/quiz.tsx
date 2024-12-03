
'use client';

import { useState } from "react";
import { Header } from "./header";
import Image from "next/image";
import { Challenge } from "./challenge";

type Props = {
    initialLessonId: number;
    initialLessonChallenges: any[];
    initialHearts: number;
    initialPercentage: number;
    userSubscription: any;
}
const Quiz = ({
    initialHearts,
    initialLessonChallenges,
    initialLessonId,
    initialPercentage,
    userSubscription
}: Props) => {
    const [status, setStatus] = useState<"correct" | "wrong" | "none">('none');
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);
    const [challenges] = useState(initialLessonChallenges)
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIdex = challenges.findIndex((challenge) => !challenge.completed);

        return uncompletedIdex === -1 ? 0 : uncompletedIdex;
    })

    const [selectedOption, setSelectedOption] = useState<number>();
    const { title, challengeOptions } = challenges[activeIndex];

    const onSelect = (id: number) => {
        if (status !== "none") return
        setSelectedOption(id);
    }
    return (
        <>
            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className="lg:min-h-[350px]  w-full 
                    px-6 lg:px-0 flex flex-col gap-y-10  items-center">
                        <Image
                            className="text-center"
                            src="/mascot.svg"
                            alt="Mascot"
                            height={150}
                            width={150}
                        />
                        <h1 className="google-header text-lg lg:text-3xl
                        text-center font-extrabold">
                            {title}
                        </h1>
                        <Challenge
                            status={ status}
                            options={challengeOptions || []}
                            onSelect={onSelect}
                            selectedOption={selectedOption}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}


export default Quiz;