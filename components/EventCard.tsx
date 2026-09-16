'use client'

import Image from "next/image";
import posthog from "posthog-js";

interface Props {
id: string;
title: string;
image: string;
slug: string;
location: string;
date: string;
time: string;
}

const isPostHogConfigured = Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST
);

const EventCard = ({ id, title, image, slug, location, date, time }: Props) => {
    const handleEventSelection = () => {
        if (isPostHogConfigured) {
            posthog.capture("featured_event_selected", { event_id: id });
        }
    };

    return (
        <a href="/events" id="event-card" onClick={handleEventSelection}>
            <Image src={image} alt={title} className="poster" width={450} height={410} />
            <div className="flex flex-row-gap-2">
                <Image src="/icons/pin.svg" alt="Location" width={20} height={20} />
                <p>{location}</p>
            </div>
            <p>{title}</p>

            <div className="datetime">
                <Image src="/icons/calendar.svg" alt="date" width={20} height={20} />
                <p>{date}</p>
            </div>
            <div>
                <Image src="/icons/clock.svg" alt="time" width={20} height={20} />
                <p>{time}</p>
            </div>

        </a>
    );
};
export default EventCard
