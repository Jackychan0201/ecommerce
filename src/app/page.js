import { Header } from '@/components/molecules/Header';
import { Footer } from '@/components/atoms/Footer';
import { ProductCatalog } from '@/components/organisms/ProductCatalog';

export default async function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <ProductCatalog/>
      <Footer />
    </div>
  );
}