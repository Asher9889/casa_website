import phoneimage from "../../assets/phoneimage.png"
import iphone from "../../assets/image 1.png"
import android from "../../assets/image 2.png"

export default function HomeBody(){
    return (
        <div className="flex flex-row justify-between mt-10 px-10">
            <div className="flex flex-col justify-between">
                <h1 className="text-5xl font-Kanit flex  pt-32 drop-shadow-2xl">Lets Change how <br/> We Shop</h1>
                <div className="flex flex-row w-40 gap-10 pb-6">
                    <img src={iphone} alt="" />
                    <img src={android} alt="" />
                </div>
            </div>
            <img className="w-72 drop-shadow-2xl" src={phoneimage} alt="" />
        </div>
    )
}