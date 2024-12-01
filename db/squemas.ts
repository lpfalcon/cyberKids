export interface CourseSquema {
    id: number;
    title: string;
    image: string;
}

export interface UserProgressSquema {
    id: number,
    userId: number,
    userName: string,
    userImage: string,
    hearts: number,
    points: number,
    activeCourseId: number,
    activeCourse: boolean
}


export interface UnitSquema {
    id: number,
    order: number,
    description: string,
    title: string,
    lessons: any[],
    activeLesson: any | undefined,
    activeLessonPercentage: number,
}