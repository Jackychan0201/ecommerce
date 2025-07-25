export const Product = ({ blok }) => {
  return (
    <div className="flex flex-col items-center justify-center  border-2 border-black-200">
        <img src={blok.image} width="200" height="200"></img>
        <h1>{blok.title}</h1>
        <p>Price: {blok.price}</p>
    </div>
  );
}