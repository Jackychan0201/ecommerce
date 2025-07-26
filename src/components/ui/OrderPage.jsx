"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/ui/ContactForm";

export const OrderPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const image = searchParams.get("image");

  const [orderPrice, setOrderPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  const handleChange = (action) => {
    switch (action) {
      case "+":
        setQuantity(quantity + 1);
        setOrderPrice(
          (Math.round(parseFloat(price) * (quantity + 1) * 100) / 100).toFixed(2) + "$"
        );
        break;
      case "-":
        if (quantity > 1) {
          setQuantity(quantity - 1);
          setOrderPrice(
            (Math.round(parseFloat(price) * (quantity - 1) * 100) / 100).toFixed(2) + "$"
          );
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-full">
      <div className="hidden sm:flex sm:h-full sm:flex-row sm:items-center">
        <div className="h-full w-1/2 flex flex-col items-center p-8 gap-5">
          <p className="text-sm font-bold text-center sm:text-lg md:text-2xl lg:text-3xl text-gray-800">
            LEGO4DOLLAZ
          </p>
          <p className="text-sm font-light text-center sm:text-base md:text-lg lg:text-2xl text-gray-800">
            Contact info
          </p>
          <ContactForm title={title} quantity={quantity} price={orderPrice}/>
        </div>
        <div className="h-full w-1/2 bg-gray-200 flex flex-col items-cetner p-8">
          <p className="text-sm font-light text-center sm:text-base md:text-lg lg:text-2xl text-gray-800">Order details</p>
          <div className="flex flex-row gap-4 text-balance justify-start my-4">
            <div className="relative w-[30%] h-[30%]">
              <img src={image} className="rounded-md border-4 border-gray-400" />
              <Badge className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                {quantity}
              </Badge>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex flex-row text-nowrap text-center text-gray-800">
                  <p className="text-medium font-bold text-center text-gray-800">{title}</p>
                  <p>({price})</p>
                </div>
              </div>
              <div className="w-fit flex flex-row rounded-sm bg-gray-400 text-gray-800">
                <Button className="bg-transparent hover:bg-transparent" onClick={() => handleChange("+")}>+</Button>
                <Label>{quantity}</Label>
                <Button className="bg-transparent hover:bg-transparent" onClick={() => handleChange("-")}>-</Button>
              </div>
            </div>
          </div>
          <Label className="self-start text-lg font-medium text-center text-gray-800">TOTAL: {orderPrice}</Label>
        </div>
      </div>

      <div className="sm:hidden">
        <p className="text-2xl font-bold text-center text-gray-800 my-4">LEGO4DOLLAZ</p>
        <Accordion type="single" collapsible className="w-[100%] py-2 px-6 bg-gray-200">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-row w-[90%] place-content-between text-lg font-medium text-center text-gray-800">
                <p>Order details</p>
                <p>{orderPrice}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance items-center py-2">
              <div className="flex flex-row gap-4 text-balance items-center py-2">
                <div className="relative w-[20%] h-[20%]">
                  <img src={image} className="w-full h-full rounded-md border-4 border-gray-400" />
                  <Badge className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                    {quantity}
                  </Badge>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex flex-row text-nowrap text-center text-gray-800">
                      <p className="text-medium font-bold text-center text-gray-800">{title}</p>
                      <p>({price})</p>
                    </div>
                  </div>
                  <div className="w-fit flex flex-row rounded-sm bg-gray-400 text-gray-800">
                    <Button className="bg-transparent" onClick={() => handleChange("+")}>+</Button>
                    <Label>{quantity}</Label>
                    <Button className="bg-transparent" onClick={() => handleChange("-")}>-</Button>
                  </div>
                </div>
              </div>
              <Label className="self-start text-lg font-medium text-center text-gray-800">TOTAL: {orderPrice}</Label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col self-center items-center p-8 gap-5">
          <p className="text-sm font-light text-center sm:text-base md:text-lg lg:text-2xl text-gray-800">
            Contact info
          </p>
          <ContactForm title={title} quantity={quantity} price={orderPrice}/>
        </div>
      </div>
    </div>
  );
}
