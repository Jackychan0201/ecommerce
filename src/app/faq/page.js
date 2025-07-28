import { Header } from '@/components/molecules/Header';
import { Footer } from '@/components/atoms/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-top">
        <h1 className="mt-10 text-sm font-bold text-center sm:text-sm md:text-base lg:text-xl text-gray-800">Frequently Asked Questions</h1>
        <Accordion
          type="single"
          collapsible
          className="w-[60%]"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Why LEGO bricks?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                The answer is pretty simple:
              </p>
              <p>
                Everyone LOVES building LEGO. And also it happened so many times that you cannot find the ONE piece.
                Thanks to our shop, you will always be able to order the missing piece.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why so expensive?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="italic">
                Bruh.
              </p>
              <p>
                We know how much LEGO can cost okay? It is a descent price for descent quality. Take it or leave it. 
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                So far we do not provide return policy.
              </p>
              <p>
                We know that at this point our page might seem like a huge scam but it is really not. 
                As long as we grow we will provide our customers with more features that make shopping as easy as never before. Stay tuned!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How to thank me</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                C&apos;mon, it&apos;s my internship.
              </p>
              <p>
                Each opinion is important to me. If you like this page, then I am glad I am actually learning something
                (and hopefully will earn money for that in the future)
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </div>
  );
}