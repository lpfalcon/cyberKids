import { Header } from "@/app/(main)/learn/header";
import { FeedWrapper } from "@/components/learn/feed-wrapper";
import { StickyWrapper } from "@/components/learn/sticky-wrapper";
import { UserProgress } from "@/components/learn/user-progress";
import { get } from "@/db/queries";
import { Unit } from "./unit";
import { UnitSquema } from "@/db/squemas";

const LearnPage = async () => {

    const { units } = await get(`${process.env.PUBLIC_URL}/json/units.json`)
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
            </StickyWrapper>

        </div>
    );
};

export default LearnPage;