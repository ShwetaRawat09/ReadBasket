import { useLocation } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";
import { OrderSuccess } from "./OrderSuccess";
import { OrderFail } from "./OrderFailure";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}
