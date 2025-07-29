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
import { ContactForm } from "@/components/organisms/ContactForm";
import useIsMobile from "@/hooks/is-mobile-observer";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const OrderPage = () => {
  
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const imageUrl = searchParams.get("image");
  const image = imageUrl.startsWith("https:") ? imageUrl : `https:${imageUrl}`;
  const isMobile = useIsMobile();
  const [order, setOrder] = useState({
    quantity: 1,
    orderPrice: (Math.round(parseFloat(price) * 1 * 100) / 100).toFixed(2) + "$",
  });

  const handleChange = (action) => {
    setOrder((prev) => {
      let newQuantity = prev.quantity;
      if (action === "+") newQuantity += 1;
      else if (action === "-" && newQuantity > 1) newQuantity -= 1;
      return {
        quantity: newQuantity,
        orderPrice: (Math.round(parseFloat(price) * newQuantity * 100) / 100).toFixed(2) + "$",
      };
    });
  };

  const quantity = order.quantity;
  const orderPrice = order.orderPrice;

  const OrderDetails = ({ imageSize = 120 }) => {
    let widthClass = "w-32 max-w-[120px]";
    if (imageSize === 90) widthClass = "w-24 max-w-[90px]";
    return (
      <div className="flex flex-row gap-4 text-balance justify-start my-4 w-full items-center py-2">
        <div className={twMerge(
          "relative flex items-center justify-center aspect-square ",
          widthClass
        )}>
          <Image
            src={image}
            alt={title || "Order image"}
            fill
            className="object-contain rounded-md border-4 border-gray-400"
            sizes={imageSize === 90 ? "(max-width: 640px) 100vw, 90px" : "(max-width: 640px) 100vw, 120px"}
          />
          <Badge className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
            {quantity}
          </Badge>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <div className={twMerge(
              "flex flex-row text-nowrap text-center text-gray-800"
            )}>
              <p className="text-medium font-bold text-center text-gray-800">{title}</p>
              <p>({price})</p>
            </div>
          </div>
          <QuantityControls />
        </div>
      </div>
    );
  };

  const QuantityControls = () => (
    <div className="w-fit flex flex-row rounded-sm bg-gray-400 text-gray-800">
      <Button className="bg-transparent hover:bg-transparent" onClick={() => handleChange("+")}>+</Button>
      <Label>{quantity}</Label>
      <Button className="bg-transparent hover:bg-transparent" onClick={() => handleChange("-")}>-</Button>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
      {/* Desktop layout */}
      <div className="hidden sm:flex sm:h-full sm:flex-row sm:items-center w-full max-w-5xl mx-auto gap-8">
        <div className="h-full w-1/2 flex flex-col items-center p-10 gap-6 bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <p className="text-2xl font-extrabold text-center text-blue-700 drop-shadow-sm mb-2">LEGO4DOLLAZ</p>
          <p className="text-base font-light text-center text-gray-600 mb-4">Contact info</p>
          <ContactForm title={title} quantity={quantity} price={orderPrice} />
        </div>
        <div className="h-full w-1/2 flex flex-col items-center p-10 gap-6 bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <p className="text-xl font-semibold text-center text-gray-700 mb-2">Order details</p>
          <OrderDetails imageSize={120} />
          <Label className="self-start text-lg font-medium text-center text-blue-700">TOTAL: {orderPrice}</Label>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="sm:hidden w-full flex flex-col items-center gap-6 my-8">
        <p className="text-2xl font-extrabold text-center text-blue-700 my-4">LEGO4DOLLAZ</p>
        <Accordion type="single" collapsible className="w-[95%] py-2 px-4 bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="flex flex-row w-[90%] place-content-between text-lg font-semibold text-center text-gray-700">
                Order details {orderPrice}
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance items-center py-2">
              <OrderDetails imageSize={90} />
              <Label className="self-start text-lg font-medium text-center text-blue-700">TOTAL: {orderPrice}</Label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col self-center items-center p-6 gap-5 w-[95%] bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <p className="text-base font-light text-center text-gray-600">Contact info</p>
          <ContactForm title={title} quantity={quantity} price={orderPrice} />
        </div>
      </div>
    </div>
  );
}
