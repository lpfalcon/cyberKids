import Image from "next/image";

type Props = {
    height: number;
    width: number;
};
export const Logo = ({ height, width }: Props) => {

    return (
        <div className="pt-8 pl-4 pb-7 
        flex items-center gap-x-3">
            <Image src="/mascot2.svg"
                height={height}
                width={width}
                alt="Mascot" />
            <h1 className="text-2xl font-extrabold
            google-header tracking-wide"> CyberKids</h1>
        </div>
    );

};