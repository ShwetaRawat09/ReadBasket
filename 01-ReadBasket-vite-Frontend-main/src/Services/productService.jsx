export async function getProductList(searchTerm) {
    // Use the REACT_APP_HOST environment variable to construct the API URL
    const response = await fetch(`${import.meta.env.VITE_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }

    const data = await response.json();
    return data;
}


export async function getProduct(id){
    // const response = await fetch(`http://localhost:8080/444/products/${id}`);
    const response = await fetch(`${import.meta.env.VITE_HOST}/444/products/${id}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getFeaturedList(){

    // const response = await fetch(`http://localhost:8080/444/featured_products`);
    const response = await fetch(`${import.meta.env.VITE_HOST}/444/featured_products`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}