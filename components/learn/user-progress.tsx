import { InfinityIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
    activeCourse: {
        imageSrc: string;
        title: string;
    },
    hearts: number,
    points: number,
    hasActiveSubcription: boolean
}

export const UserProgress = ({
    activeCourse,
    hearts,
    points,
    hasActiveSubcription }: Props) => {

    return (
        <div className=" flex items-start justify-between
        gap-x-2 w-full">

            <Link href="/courses">
                <Button variant="transparent">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                    />
                </Button>
            </Link>

            <Link href="/shop">
                <Button variant="transparent" className="text-orange-500">
                    <Image
                        src="/points.svg"
                        height={28}
                        width={28}
                        alt="Points"
                        className="m-r-2"
                    />
                    {points}
                </Button>
            </Link>

            <Link href="/shop">
                <Button variant="transparent" className="text-rose-500">
                    <Image
                        src="/heart.svg"
                        priority 
                        height={22}
                        width={22}
                        alt="Hearts"
                        className="m-r-2"
                    />
                    {
                        hasActiveSubcription
                            ? <InfinityIcon className="h-4 w-4 stroke-[3]" />
                            : hearts
                    }
                </Button>
            </Link>

        </div>
    );
};