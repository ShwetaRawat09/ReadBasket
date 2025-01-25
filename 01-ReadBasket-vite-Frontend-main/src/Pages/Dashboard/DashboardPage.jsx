import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useTitle } from "../../Hooks/useTitle";
import { getUserOrders } from "../../Services/ServiceIndex";
import { DashboardCard } from "./DashboardCard";
import { DashboardEmpty } from "./DashboardEmpty";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  
  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders(){
      try{
        const data = await getUserOrders();
        setOrders(data);
      } catch(error){
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      }      
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}
