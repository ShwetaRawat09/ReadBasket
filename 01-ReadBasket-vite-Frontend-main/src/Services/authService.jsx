//Auth Register
export async function register(authDetail){
    
    //Making a POST Request to create a new User
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    }  
    
    const response = await fetch(`${import.meta.env.VITE_HOST}/register`, requestOptions);
    // const response = await fetch("http://localhost:8080/register", requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    
    //For Guest Session Storage
    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("bmid", JSON.stringify(data.user.id));
    }

    return data;
} 

//Auth Login
export async function login(authDetail){
    
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    }

    const response = await fetch(`${import.meta.env.VITE_HOST}/login`, requestOptions);
    // const response = await fetch("http://localhost:8080/login", requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();

     //For Guest Session Storage
    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("bmid", JSON.stringify(data.user.id));
    }

    return data;
}



//Logout
export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("bmid");
}