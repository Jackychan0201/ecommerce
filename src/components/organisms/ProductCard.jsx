import Link from "next/link";

const ProductCard = ({ blok, slug }) => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-black-200 rounded-md hover:shadow-lg">
        <img src={blok.image} className="min-w-[10rem] min-h-[10rem] size-[16vw] m-4 rounded-md border-3 border-black-200"></img>
        <Link href={`/products/${slug}`} className="flex flex-col items-center justify-center mt-2 mb-6">
          <p className="font-bold hover:underline">{blok.title}</p>
          <p>{blok.price}</p>
        </Link>
    </div>
  );
}
export default ProductCard