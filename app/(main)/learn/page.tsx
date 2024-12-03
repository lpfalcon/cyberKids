import { Header } from "@/app/(main)/learn/header";
import { FeedWrapper } from "@/components/learn/feed-wrapper";
import { StickyWrapper } from "@/components/learn/sticky-wrapper";
import { UserProgress } from "@/components/learn/user-progress";
import { get } from "@/db/queries";
import { Unit } from "./unit";
import { UnitSquema } from "@/db/squemas";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LearnPage = async () => {

    const { units } = await get(`${process.env.NEXT_PUBLIC_URL}/json/units.json`)
    return (
        <div className="flex gap-[48px] px-6">

            <FeedWrapper>

                <Header title="Cyberbullying" />
                {
                    units.map((unit: UnitSquema) => (

                        <div key={unit.id} className="mb-10 mt-10">
                            <Unit
                                id={unit.id}
                                order={unit.order}
                                description={unit.description}
                                title={unit.title}
                                lessons={unit.lessons}
                                activeLesson={unit.activeLesson}
                                activeLessonPercentage={unit.activeLessonPercentage}

                            />

                        </div>
                    ))

                }
            </FeedWrapper>

            <StickyWrapper>

                <UserProgress
                    activeCourse={{
                        title: "Cyberbullying",
                        imageSrc: "/courses.svg"
                    }}
                    hearts={5}
                    points={100}
                    hasActiveSubcription={false}
                />

                <div className="mb-10 mt-10 border-2 rounded-xl border-b-4 
            hover:bg-black/5  cursor-pointer active:border-b-2 w-full p-4
            flex flex-col items-center">
                    <h1 className="text-xl font-extrabold google-header text-center">
                        The monthly challenges are about to begin!
                    </h1>
                    <p className="text-lg font-semibold mt-3 text-center">
                        Complete each month's challenge and earn exclusive medals.
                    </p>
                    <Trophy
                        style={{ width: "100px", height: " 100px" }}
                        className="fill-orange-400 stroke-orange-400 text-orange-400" />
                </div>

                <div className="mb-10 mt-10 border-2 rounded-xl border-b-4 
            hover:bg-black/5  cursor-pointer active:border-b-2 w-full p-4
            flex flex-col items-center">
                    <h1 className="text-xl font-extrabold google-header text-center">
                        Finish a lesson to enter this week's challenge.
                    </h1>
                    <Button
                        size="lg"
                        variant="primary"
                        className="w-full mt-2"
                        asChild>
                        <Link href="/courses">
                            Continue Learning
                        </Link>
                    </Button>

                </div>
            </StickyWrapper>

        </div>
    );
};

export default LearnPage;