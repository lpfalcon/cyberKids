import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

type Props = {

    title: string;
}
export const Header = ({ title }: Props) => {

    return (
        <div className="sticky top-0 bg-white pb-3
       flex items-center justify-between border-b-2
        text-neutral-400 lg:z-50">
            <Link href="/courses">
                <Button variant="transparent" size="sm">
                    <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
                </Button>
            </Link>
            <h1 className="font-bold text-lg">
                { title }
            </h1>
        </div>
    );
};