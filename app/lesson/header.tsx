import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-model";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
    hearts: number;
    percentage: number;
    hasActiveSubscription: boolean;
}

export const Header = ({
    hearts,
    hasActiveSubscription,
    percentage
}: Props) => {
    const { open } = useExitModal();
    return (
        <header className="lg:pt-[50px] pt-[20px]
        px-10 flex gap-x-7 items-center justify-center 
        max-auto w-full" >
            <X
                onClick={open}
                className="text-slate-500 hover:opacity-75
            transition cursor-pointer"
            />

            <Progress className="max-w-[1140px] " value={percentage} />
            <div className="text-rose-500 flex items-center font-bold">
                <Image
                    src="/heart.svg"
                    priority
                    height={28}
                    width={28}
                    alt="Heart"
                    className="mr-2"
                />
                {
                    hasActiveSubscription
                        ? <InfinityIcon />
                        : hearts

                }
            </div>
        </header >
    );
}