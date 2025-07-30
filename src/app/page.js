import { Header } from '@/components/molecules/Header';
import { Footer } from '@/components/atoms/Footer';
import { ProductCatalog } from '@/components/organisms/ProductCatalog';
import { Suspense } from "react";
import { Loading } from '@/components/atoms/Loading';

export const metadata = {
  title: 'Homepage - LEGO4DOLLAZ',
  description: 'The missing piece for you LEGO builds',
}

export default async function Home() {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="flex flex-col min-h-full">
        <Header />
        <ProductCatalog/>
        <Footer />
      </div>
    </Suspense>
  );
}