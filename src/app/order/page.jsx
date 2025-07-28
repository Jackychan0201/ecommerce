import { Suspense } from "react";
import { Loading } from '@/components/atoms/Loading';
import { OrderPage } from '@/components/organisms/OrderPage';


export default function OrderPageWrapper() {
  return (
    <Suspense fallback={<Loading/>}>
      <OrderPage />
    </Suspense>
  );
}
