
import Cookies from "js-cookie";


export const setToken = (token:string) =>{
    Cookies.set('token',token,{
        expires: 7,
        secure: process.env.NODE_ENV === 'production',
        sameSite:'Strict'

    })
}


export const getToken =()=>{
    return Cookies.get('token')
}


export const removeToken =()=>{
    Cookies.remove('token')
}

export const setAuth = (isAuth:boolean) =>{
    Cookies.set('isAuth',isAuth.toString(),{
        expires: 7,
        secure: process.env.NODE_ENV === 'production',
        sameSite:'Strict'

    })
}

export const getAuth = () => {
    return Cookies.get('isAuth');
}