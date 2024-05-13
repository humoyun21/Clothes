
import Layout from '../../components/ui/layout'
import { getDataFromCookie } from "@data-service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./style.scss"
const index = () => {
    const navigate = useNavigate();
    const login = () => {
        if(!getDataFromCookie("token")) {
            navigate("/")
        }
    }
    useEffect(() => {
        login()
    }, [])
    return (
        <div>
            <Layout/>
        </div>
    );
};

export default index;