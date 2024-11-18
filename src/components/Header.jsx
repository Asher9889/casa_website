import { NavLink} from "react-router-dom";
import { Home } from "../pages";
import casaimage from "../assets/Casa.png"

export default function Header(){
    const nav_links = [
        { name: "about us", path: "/about" },
        { name: "contact us", path: "/contact" },
        { name: "privacy policy", path: "/privacy" },
    ];

    return (
        <div className="flex flex-row justify-between py-6">
            <div className="w-24">
                <NavLink to={"/"}><img src={casaimage} alt="" /></NavLink>
            </div>
            <div className="flex flex-row gap-6 text-lg font-Kanit">
                {nav_links.map((link)=>(
                    <NavLink to={link.path} key={link.name} >{link.name.toUpperCase()}</NavLink>
                    
                ))}
            </div>
        </div>
    )
}