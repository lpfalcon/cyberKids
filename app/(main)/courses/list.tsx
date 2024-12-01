'use client';

import { CourseSquema } from "@/db/squemas";
import { Card } from "./card";
import { useRouter } from "next/navigation";


type Props = {
    courses: CourseSquema[];
    activeCourseId: number;
};


export const List = ({ courses, activeCourseId }: Props) => {
    const router = useRouter();

    const onClick = () => router.push("learn")


    return (
        <div className="pt-6 grid sm:grid-cols-1  md:grid-cols-2 
        lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
        gap-4">

            {
                courses.map((course) => (

                    <Card
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        image={course.image}
                        onClick={onClick}
                        disabled={false}
                        active={course.id === activeCourseId}
                    />

                ))
            }
        </div>
    )
}