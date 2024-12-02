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
            onClick={() => { }}
            className={cn(
                `h-full border-2 rounded-xl border-b-4 
            hover:bg-black/5 p-4 lg:p-6 cursor-pointer
            active:border-b-2
            `,
                selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
                selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
                selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
                disabled && "pointer-events-none hover:bg-white",
            )}
        >
            {imageSrc && (
                <div className="relative aspect-square mb-4
                max-h-[150px] w-full flex justify-center">
                    <Image
                        object-fit="cover"
                        src={imageSrc}
                        alt="image"
                        width={200}
                        height={300}
                    />
                </div>
            )}
        </div>

    );
}