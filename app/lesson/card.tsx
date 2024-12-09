import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    id: number;
    imageSrc: string | null;
    text: string;
    shortcut: string;
    onClick: () => void;
    disabled?: boolean;
    selected?: boolean;
    status: "correct" | "wrong" | "none";
}

export const Card = ({
    id,
    imageSrc,
    onClick,
    shortcut,
    status,
    text,
    disabled,
    selected
}: Props) => {

    return (

        <div
            onClick={onClick}
            className={cn(
                `border-2 rounded-xl border-b-4 
            hover:bg-black/5  cursor-pointer
            active:border-b-2 max-w-[300px] 
            m-4
            `,
                selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
                selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
                selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
                disabled && "pointer-events-none hover:bg-white",
            )}
        >
            {imageSrc && (
                <div className="relative mb-4  w-full flex justify-center">
                    <Image
                        src={imageSrc}
                        className="rounded-t-xl object-contain"
                        alt="image"
                        width={300}
                        height={300}
                    />
                </div>
            )}

            <p className="p-4 text-wrap">
                {text}
            </p>
        </div>

    );
}