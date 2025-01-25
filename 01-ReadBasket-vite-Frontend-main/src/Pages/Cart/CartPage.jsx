import { useTitle } from "../../Hooks/useTitle";
import { CartEmpty } from "./CartEmpty";
import { CartList } from "./CartList";
import { useCart } from "../../Context/ContextIndex";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}
