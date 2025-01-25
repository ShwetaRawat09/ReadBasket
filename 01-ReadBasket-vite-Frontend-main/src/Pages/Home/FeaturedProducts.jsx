import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../Components/CompIndex";
import { getFeaturedList } from "../../Services/ServiceIndex";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts(){
      try{
        const data = await getFeaturedList();
        setProducts(data);
      } catch(error){
        toast.error(error.message, {closeButton: true, position: "bottom-center" });
      }      
    }
    fetchProducts();
  }, [])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured Books</h1>    
        <div className="flex justify-center flex-wrap lg:flex-nowrap">

          { products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) }

        </div>

        <p>  </p>
    </section>
  )
}
