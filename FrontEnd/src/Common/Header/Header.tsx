import { useEffect } from "react";
import { MenuDetails } from "../../APIService/APIService.js"


const Header = () => {

    useEffect(() => {

        MenuDetails().then((res) => {

            console.log(res)

        });
    }, []);

    return (<>


        <button className="btn btn-info">Hello</button>






    </>)
}

export default Header