import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ blok, slug }) => {
  console.log(blok.image);
  const imageUrl = blok.image?.startsWith("https:") ? blok.image : `https:${blok.image}`;

  return (
    <Link href={`/products/${slug}`} className="flex flex-col items-center justify-center rounded-md cursor-pointer group focus:outline-none">
      <Image
        src={imageUrl}
        alt={blok.title}
        width={200}
        height={200}
        className="min-w-[9rem] min-h-[9rem] size-[16vw] rounded-md"
      />
      <div className="flex flex-col items-center justify-center mt-2 mb-6">
        <p className="font-bold group-hover:underline">{blok.title}</p>
        <p>{blok.price}</p>
      </div>
    </Link>
  );
}
export default ProductCard