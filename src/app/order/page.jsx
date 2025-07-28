import { Suspense } from "react";
import { OrderPage } from '@/components/organisms/OrderPage';
import { Loading } from '@/components/atoms/Loading';

export default function OrderPageWrapper() {
  return (
    <Suspense fallback={<Loading/>}>
      <OrderPage />
    </Suspense>
  );
}
