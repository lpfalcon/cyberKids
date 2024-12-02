/* eslint-disable */
import { UnitSquema } from "@/db/squemas";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";



export const Unit = ({
    id,
    order,
    title,
    lessons,
    description,
    activeLesson,
    activeLessonPercentage

}: UnitSquema) => {

    return (
        < >
            <UnitBanner
                title={title}
                description={description}
            />
            <div className="flex items-center flex-col relative">
                {
                    lessons.map((lesson, index) => {
                        const isCurrent = lesson.id === activeLesson?.id;
                        const isLocked = !lesson.completed && !isCurrent

                        return (
                            <LessonButton
                                key={lesson.id}
                                id={lesson.id}
                                index={index}
                                totalCount={lessons.length - 1}
                                current={isCurrent}
                                locked={isLocked}
                                percentage={activeLessonPercentage}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};