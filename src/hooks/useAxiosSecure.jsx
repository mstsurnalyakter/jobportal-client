import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials:true
});

const useAxiosSecure = () => {
    const { logOut} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(
            res=>{
                return res
            },
        async (error)=>{
        if (error.response.status === 401 || error.response.status === 404) {
          await logOut()
          navigate("/login");
        }
        return Promise.reject(error)
            }
        )
    },[logOut,navigate])

}

export default useAxiosSecure