import { Card } from "./card";

type Props = {
    options: any[];
    onSelect: (id: number) => void;
    selectedOption?: number;
    disabled?: boolean;
    status : string;
}

export const Challenge = ({
    options,
    onSelect,
    disabled,
    status,
    selectedOption
}: Props) => {

    return (
        <div className=" grid gap-6 sm:grid-cols-1  md:grid-cols-2 
        lg:grid-cols-3"
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