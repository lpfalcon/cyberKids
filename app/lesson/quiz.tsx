'use client';

import { useState } from "react";
import { Header } from "./header";

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

    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);


    return (
        <>
            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">

                </div>
            </div>
        </>
    )
}


export default Quiz;