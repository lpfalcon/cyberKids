import { severalQueries } from "@/db/queries";
import Quiz from "./quiz";

 const LessonPage = async() => {
    const urls = [`${process.env.PUBLIC_URL}/json/lessons.json`,
        `${process.env.PUBLIC_URL}/json/userProgress.json`
        ]
    
        const [
            lesson,
            userProgress
        ] = await severalQueries(urls);
    return (
        <Quiz 
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            initialHearts = {userProgress.hearts}
            initialPercentage ={lesson.lessonPercentage * 100}
            userSubscription={null}
        />
    );

};

export default LessonPage;