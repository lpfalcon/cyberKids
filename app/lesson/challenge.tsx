/* eslint-disable */

import { cn } from "@/lib/utils";
import { Card } from "./card";

type Props = {
    options: any[];
    onSelect: (id: number) => void;
    selectedOption?: number;
    disabled?: boolean;
}

export const Challenge = ({
    options,
    onSelect,
    disabled,
    selectedOption
}: Props) => {

    return (
        <div className={
            cn("grid gap-2", `sm:grid-cols-1  grid-cols-2  
                lg:grid-cols-[repeat(auto-fit,minmax(0px,1fr))]`)
        }
        >
            {
                options.map((option, i) => (
                    
                    <Card
                        key={option.id}
                        id={option.id}
                        text={option.text}
                        imageSrc={option.image}
                        shortcut={`${i + 1}`}
                        selected={selectedOption === option.id}
                        onClick={() => onSelect(option.id)}
                        status={option.status}
                        disabled={disabled}
                    />

                ))
            }
        </div>
    )
}