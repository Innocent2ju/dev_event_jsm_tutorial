'use client'
import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="my-6 mx-auto" onClick={() => console.log("Explore")}>
            <a href="#events">
                Explore Events
                <Image src="icons/arrow-down.svg" alt="arrow-down" width={20} height={20} />
            </a>
        </button>
    )
}
export default ExploreBtn
