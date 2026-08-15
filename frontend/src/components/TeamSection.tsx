import { Fraunces, Nunito, Lora, Inter } from "next/font/google";
import TeamCard, { type Member } from "./TeamCard";

// --- Fonts ---------------------------------------------------------------
const display = Fraunces({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-display",
});

const heading = Nunito({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-heading",
});

const nameFont = Lora({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-name",
});

const body = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-body",
});

// --- Data ------------------------------------------------------------------
const team: Member[] = [
    {
        name: "Tual Mun Khai Bawmkhai",
        role: "Project Manager",
        bio: "Khai is in his final semester studying a Bachelor of IT. He is the Project Manager for this project, and outside of his studies he enjoys playing all sorts of sport as well as spending time with friends.",
        image: "/team/khai.png",
        tagColor: "blue",
    },
    {
        name: "Julia Ribera",
        role: "Business Analyst",
        bio: "Julia is studying a Bachelor of IT and currently serves as Business Analyst for this project. In her spare time she enjoys reading, travelling and trying new food places.",
        image: "/team/julia.png",
        tagColor: "green",
    },
    {
        name: "Michael Mattas",
        role: "UI/UX Designer",
        bio: "Michael is completing a Bachelor of IT and takes on the UI/UX role for this project. He also works in an IT helpdesk, and in his free time enjoys playing games, drawing and reading.",
        image: "/team/michael.png",
        tagColor: "orange",
    },
    {
        name: "Mitchell Long",
        role: "Developer 1",
        bio: "Mitchell is completing his Bachelor of Computer Science this year and is one of the developers on this project. He enjoys playing all types of games and messing with manky old computers.",
        image: "/team/mitch.png",
        tagColor: "purple",
    },
    {
        name: "Cameron Nguyen",
        role: "Developer 2",
        bio: "Cameron is currently studying a Bachelor of IT and is one of the developers on this project. He enjoys playing video games in his spare time.",
        image: "/team/cameron.png",
        tagColor: "purple",
    },
];

export default function TeamSection() {
    return (
        <section
            className={`${display.variable} ${heading.variable} ${nameFont.variable} ${body.variable} font-[family-name:var(--font-body)] px-6 py-24`}
        >
            <div className="mx-auto max-w-5xl text-center">
                {/* Badge */}
                <span className="inline-block rounded-full bg-emerald-100/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800">
                    Meet the Team
                </span>

                {/* Display heading */}
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-6xl font-normal text-slate-900">
                    Team 54B
                </h2>

                {/* Subheading */}
                <p className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-medium text-slate-900">
                    Embedding the Virtual Health Precinct
                </p>

                {/* Body */}
                <p className="mx-auto mt-6 max-w-2xl text-slate-500">
                    We are a team of five final-year students building a
                    &ldquo;Choose Your Own Adventure&rdquo; conversation simulator
                    that lets undergraduate nursing students practise realistic
                    patient interactions, make swift decisions, and build
                    confidence, communication and clinical judgement along the way.
                </p>
            </div>

            {/* Team cards */}
            <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-6">
                {team.map((member) => (
                    <TeamCard key={member.name} member={member} />
                ))}
            </div>
        </section>
    );
}