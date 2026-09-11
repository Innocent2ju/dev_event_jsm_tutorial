export interface EventItem {
    id: string;
    title: string;
    image: string;
    date: string;
    location: string;
    description: string;
    time: string;
}

export const events: EventItem[] = [
    {
        id: "1",
        title: "Lagos Tech & AI Summit 2026",
        image: "/images/event1.png",
        time: "10:09Am",
        date: "October 15, 2026",
        location: "Xerox Conference Centre, Lagos",
        description: "A premier gathering of software engineers, AI researchers, and tech founders discussing cutting-edge innovations."
    },
    {
        id: "2",
        time: "10:09Am",
        title: "African Web Developers Hackathon",
        image: "/images/event2.png",
        date: "November 04, 2026",
        location: "Virtual & Enugu Hub",
        description: "Build scalable full-stack applications using Next.js, TypeScript, and modern cloud infrastructure over 48 intense hours."
    },
    {
        id: "3",
        time: '6.09PM',
        title: "Cloud & DevOps Open Source Meetup",
        image: "/images/event3.png",
        date: "November 22, 2026",
        location: "Civic Centre, Victoria Island",
        description: "Deep dive into containerization, Kubernetes, continuous integration, and high-performance serverless deployments."
    },
    {
        id: "4",
        time: '6.02PM',
        title: "Enugu Software Engineering Symposium",
        image: "/images/event4.png",
        date: "December 05, 2026",
        location: "ESUT Auditorium, Enugu",
        description: "Connecting students and professional developers to explore emerging web architectures and career growth in tech."
    },
    {
        id: "5",
        time: '6.03PM',
        title: "Web3 & Blockchain Developer Con",
        image: "/images/event5.png",
        date: "December 18, 2026",
        location: "Eko Hotel, Lagos",
        description: "Explore smart contract security, decentralized applications, and high-speed blockchain network tooling."
    },
    {
        id: "6",
        time: '6.07PM',
        title: "Frontend Masters Masterclass Live",
        image: "/images/event6.png",
        date: "January 12, 2027",
        location: "Online Stream",
        description: "Master advanced React patterns, state management, and production-ready caching strategies in Next.js."
    }
];