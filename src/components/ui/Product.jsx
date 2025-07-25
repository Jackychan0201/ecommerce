import { Button } from "@/components/ui/button";

export const Product = ({ blok }) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1>Title: {blok.title}</h1>
        <p>Description: {blok.description}</p>
        <p>Price: {blok.price}</p>
        <Button variant="default" size="sm">Request</Button>
    </div>
  );
}