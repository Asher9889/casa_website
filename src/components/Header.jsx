import { NavLink } from "react-router-dom";
import casaimage from "../assets/Casa.png"

export default function Header(){
    const nav_links = [
        { name: "about us", path: "/about" },
        { name: "contact us", path: "/contact" },
        { name: "privacy policy", path: "/privacy" },
    ];

    return (
        <div className="flex flex-row justify-between">
            <div className="w-24">
                <img src={casaimage} alt="" />
            </div>
            <div className="flex flex-row gap-6 text-lg font-Kanit">
                {nav_links.map((link)=>(
                    <NavLink to={link.path} key={link.name} >{link.name.toUpperCase()}</NavLink>
                    
                ))}
            </div>
        </div>
    )
}