import { Suspense } from "react";
import { OrderPage } from '@/components/ui/OrderPage';
import { Loading } from '@/components/ui/Loading';

export default function OrderPageWrapper() {
  return (
    <Suspense fallback={<Loading/>}>
      <OrderPage />
    </Suspense>
  );
}
