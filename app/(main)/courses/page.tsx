import { severalQueries } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {

    const urls = [`${process.env.NEXT_PUBLIC_URL}/json/courses.json`,
    `${process.env.NEXT_PUBLIC_URL}/json/userProgress.json`
    ]

    const [
        { courses = []},
        userProgress
    ] = await severalQueries(urls)

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold google-header">
                Cybersecurity courses
            </h1>
            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            />
        </div>
    );

};

export default CoursesPage;