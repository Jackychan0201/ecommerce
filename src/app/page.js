import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { ProductCatalog } from '@/components/ui/ProductCatalog';

export default async function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <ProductCatalog/>
      <Footer />
    </div>
  );
}