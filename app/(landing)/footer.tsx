import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Country {
    name: string;
    image: string;
}
export const Footer = () => {
    const countries: Country[] = [
        {
            name: "English",
            image: "/us.svg"
        },
        {
            name: "Espanish",
            image: "/es.svg"
        },
        {
            name: "France",
            image: "/fr.svg"
        },
        {
            name: "Italian",
            image: "/it.svg"
        }
    ]
    return (

        <footer className="hidden lg:block h-20 w-full
        border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex
            items-center justify-evenly h-full">
                {
                    countries.map(country => (
                        <Button
                            size="lg"
                            variant="transparent"
                            className="w-full"
                            key={country.name}
                        >
                            <Image
                                src={country.image}
                                height={32}
                                width={40}
                                alt={country.name}
                                className="mr-4 rounded-md"
                                style={{ width: "40px", height: "32px" }}
                            />
                            {country.name}
                        </Button>
                    ))
                }
            </div>
        </footer>

    );
};