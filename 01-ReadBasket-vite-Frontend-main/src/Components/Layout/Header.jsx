import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookMartLogo from "../../assets/BookMart.png"; //BookMart Logo
import { Search } from "../Sections/Search";
import { DropdownLoggedOut, DropdownLoggedIn } from "../CompIndex";
import { useCart } from "../../Context/ContextIndex";

export const Header = () => {
  const { cartList } = useCart();

  //Dark-Mode
  let darkModeValue = localStorage.getItem("darkMode"); //Fetching value form the Local-Storage
  const [darkMode, setDarkMode] = useState(JSON.parse(darkModeValue) || false); //To handle Dark Mode

  //Search
  const [searchSection, setSearchSection] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  //token to show name of the Register User
  const token = JSON.parse(sessionStorage.getItem("token"));

  //Dark-Mode
  useEffect(() => {

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
    //Provided by TailwindCSS
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>   
      
      {/* FlowBite Code */}
      <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-full px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center">
                  <img src={BookMartLogo} className="mr-3 h-10" alt="BookMart-Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ReadBasket</span>
              </Link>
              <div className="flex items-center relative">

                {/* Dark-Mode */}
                  <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                  {/* Search Section */}
                  <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                    {/* Dropdown Functionality */}
                  <span onClick={() => setDropdown(!dropdown)} className="bi-person-badge-fill cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  {/* Dropdown Functionality for Registered user */}
                  { dropdown && ( token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} /> ) }
              </div>
          </div>
      </nav>

      { searchSection && <Search setSearchSection={setSearchSection} /> }
      
    </header>
  )
}
