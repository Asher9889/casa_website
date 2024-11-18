import iphone from "../assets/image 1.png"
import android from "../assets/image 2.png"

export default function Download(){
    return (
        <div className="flex flex-row   gap-36 justify-center  mt-8">
            <img className="w-48" src={iphone} alt="" />
            <img className="w-48" src={android} alt="" />
        </div>
    )
}