import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-top">
        <h1 className="mt-10 text-sm font-bold text-center sm:text-sm md:text-base lg:text-xl text-gray-800">About</h1>
        <p className="mt-5 w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum enim, laoreet id lectus ullamcorper, 
          viverra dignissim diam. Sed vitae gravida metus. Nunc placerat molestie elit, a blandit odio laoreet sed. 
          Proin viverra suscipit luctus. Nam feugiat orci id est accumsan molestie. Donec bibendum velit justo, vel convallis 
          tortor faucibus at. Ut maximus leo non tortor suscipit, in tincidunt nibh egestas. Vivamus eu lorem risus. In eget 
          facilisis nulla, in euismod risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
          turpis egestas. Etiam eget scelerisque ligula... 
        </p>
        <p className="mt-2 w-[80%] italic">Okay just kidding. My name is Yauheni Budzko, and I am a fullstack developer, 
          currently job-less and having and internship at SoftTeco. I love what I am doing, it's pretty challenging and interesting at 
          the same time. Wanna know how it will turn out? Let's see. And a bit more of Lorem Ipsum for y'all: 
        </p>
        <p className="mt-2 w-[80%]">Vestibulum mattis arcu sit 
          amet imperdiet rhoncus. Aliquam id vehicula eros. Vivamus scelerisque ut odio a dictum. Praesent hendrerit, neque nec dignissim 
          pulvinar, velit ex rhoncus arcu, at aliquet sapien metus vel eros. In pharetra, elit id consectetur aliquam, leo neque eleifend 
          orci, sed pulvinar orci ex at orci. Ut a mi id neque facilisis varius. Vivamus suscipit nulla eu mauris pharetra, ut tincidunt 
          nisi egestas. Sed volutpat tristique tellus faucibus malesuada. Ut posuere massa a lacinia feugiat. Suspendisse vehicula diam 
          et lorem faucibus, id congue risus tempor. Duis ipsum nibh, blandit nec fringilla sed, iaculis a purus. Morbi condimentum 
          quam vel nulla iaculis cursus. Morbi in tincidunt felis, at dapibus tellus. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Quisque hendrerit ligula sed condimentum pharetra. Nulla mollis dictum dignissim. Fusce commodo nec 
          nisi a varius. Pellentesque auctor molestie est, non gravida elit dictum maximus. Quisque id neque id arcu vehicula pretium 
          at egestas tellus. Curabitur auctor dui vel felis fringilla, quis ullamcorper nisl finibus. Pellentesque sed sodales nisi, at 
          consectetur diam. Donec ut risus vel diam ornare imperdiet at vel ex. Nam ultricies neque eget leo fringilla suscipit.
        </p>
      </main>
      <Footer />
    </div>
  );
}
