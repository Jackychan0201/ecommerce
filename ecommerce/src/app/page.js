import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-20">HELLO WORLD</h1>
      <Button className="mt-30" variant="default" size="lg">Request</Button>
    </main>
  );
}