'use client'
import Image from "next/image";
import posthog from "posthog-js";

const isPostHogConfigured = Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST
);

const ExploreBtn = () => {
    const handleExplore = () => {
        console.log("Explore");

        if (isPostHogConfigured) {
            posthog.capture("event_catalog_explored");
        }
    };

    return (
        <button type="button" id="explore-btn" className="my-6 mx-auto" onClick={handleExplore}>
            <a href="#events">
                Explore Events
                <Image src="icons/arrow-down.svg" alt="arrow-down" width={20} height={20} />
            </a>
        </button>
    )
}
export default ExploreBtn
