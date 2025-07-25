import Link from "next/link";

export const ProductCard = ({ blok }) => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-black-200 rounded-md hover:shadow-lg">
        <img src={blok.image} className="min-w-[10rem] min-h-[10rem] w-[16vw] h-[16vw] m-4 rounded-md border-3 border-black-200"></img>
        <Link href="/faq" className="flex flex-col items-center justify-center mt-2 mb-6">
          <p className="font-bold hover:underline">{blok.title}</p>
          <p>{blok.price}</p>
        </Link>
    </div>
  );
}