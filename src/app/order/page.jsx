import { Suspense } from "react";
import { OrderPage } from '@/components/ui/OrderPage';

export default function OrderPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderPage />
    </Suspense>
  );
}
