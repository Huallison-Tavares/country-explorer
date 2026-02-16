import Image from "next/image";

interface BoxInfoProps {
    icon: string,
    textBox: string | number;
    label: string;
}

export default function BoxInfo({
    icon,
    textBox,
    label
}:BoxInfoProps) {
    return (
        <div className="w-1/2 p-2 flex gap-4 items-start rounded-2xl bg-gray-50/50 border border-gray-100/50 hover:bg-white transition-colors duration-300 shadow-sm">
            <Image 
                src={icon}
                alt={`${label} Icon`}
                width={40}
                height={40}
            />

            <div className="flex flex-col text-start">
                <h3 className="opacity-60 uppercase text-sm">{label}: </h3>
                <p className="font-bold text-lg">{textBox}</p>
            </div>
        </div>
    )
}