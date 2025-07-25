import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export default async function FAQ() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <p>FAQ</p>
      </main>
      <Footer />
    </div>
  );
}