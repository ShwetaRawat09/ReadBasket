import { Link } from "react-router-dom";
import BusinessCover from "../../assets/BookMartCover.png";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      {/* Text Content */}
      <div className="lg:mr-5 lg:w-1/2 lg:p-2 relative">
        <h1 className="text-5xl font-bold mb-4 lg:mb-6 lg:mt-[-10px]">
          Welcome to ReadBasket
        </h1>
        <p className="text-2xl my-6 px-1 dark:text-slate-100">
          Discover the ultimate destination for book lovers! At BookMart, we
          offer a wide selection of books—purchase your favorite titles or
          access the newest releases digitally. Experience a seamless shopping
          journey with us, whether you're looking for physical copies or eBooks.
        </p>
        <div className="w-full flex justify-center lg:justify-start">
          <Link
            to="/products"
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Explore Books
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="my-5 lg:w-1/2 lg:p-2 w-full flex justify-center">
        <img
          className="rounded-lg max-w-full max-h-full object-contain"
          src={BusinessCover}
          alt="BookMart Cover Page"
        />
      </div>
    </section>
  );
};
