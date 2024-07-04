import { Outlet, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks.js/useAuth";
import { useEffect } from "react";

export default function Authenticate() {
    const { response } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(response)
    useEffect(() => {
        response?.img ?
        navigate("/analysis", { location: location, replace: true }) :
            navigate("/upload", { location: location, replace: true })
    }, [location, response])
}
