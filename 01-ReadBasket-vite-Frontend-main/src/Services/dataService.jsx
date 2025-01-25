function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const bmid = JSON.parse(sessionStorage.getItem("bmid"));
    return {token,bmid};
}

//To get the informatuon of login user from the session
export async function getUser(){

    const browserData = getSession();
    
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }
    
    // const response = await fetch(`http://localhost:8080/600/users/${browserData.bmid}`, requestOptions);
    const response = await fetch(`${import.meta.env.VITE_HOST}/600/users/${browserData.bmid}`, requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders(){

    const browserData = getSession();

    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }
    // const response = await fetch(`http://localhost:8080/660/orders?user.id=${browserData.bmid}`, requestOptions);
    const response = await fetch(`${import.meta.env.VITE_HOST}/660/orders?user.id=${browserData.bmid}`, requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

//Create Order in Checkout
export async function createOrder(cartList, total, user){

    const browserData = getSession();
    
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
        body: JSON.stringify(order)
    }
   
    // const response = await fetch("http://localhost:8080/660/orders", requestOptions);
    const response = await fetch(`${import.meta.env.VITE_HOST}/660/orders`, requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}