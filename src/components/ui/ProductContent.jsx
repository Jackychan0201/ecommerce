import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ProductContent = ({ blok }) => {
    return (
        <div className="flex flex-col items-center lg:flex-row gap-5">
            <img src={blok.image} className="min-w-[10rem] min-h-[10rem] w-[70%] h-[70%] m-4 rounded-md border-3 border-black-200"></img>
            <div className="flex flex-col items-center m-4 gap-y-5">
                <p className="font-bold sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-nowrap">{blok.title}</p>
                <p className="font-medium sm:text-medium md:text-xl lg:text-2xl xl:text-3xl">{blok.price}</p>
                <p className="font-normal sm:text-sm md:text-medium lg:text-lg xl:text-xl text-pretty">{blok.shortDescription}</p>
                <Button asChild>
                    <Link href={{
                        pathname: "/order",
                        query: {
                            title: blok.title,
                            price: blok.price,
                            image: blok.image,
                        },
                        }}>
                            Order now
                    </Link>
                </Button>
                <div className="font-light ms:text-2xs md:text-xs lg:text-sm xl:text-medium text-pretty whitespace-pre-line">
                    {blok.fullDescription.replace(/\\n/g, '\n\n')}
                </div>
            </div>
        </div>
    )
}