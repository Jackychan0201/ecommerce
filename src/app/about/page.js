import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export default async function About() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <p>About</p>
      </main>
      <Footer />
    </div>
  );
}