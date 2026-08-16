"use client";

import { useState } from "react";
import Image from "next/image";

export type Member = {
    name: string;
    role: string;
    bio: string;
    image?: string;
    tagColor: "blue" | "green" | "orange" | "purple";
};

const tagStyles: Record<Member["tagColor"], string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-emerald-100 text-emerald-700",
    orange: "bg-orange-100 text-orange-700",
    purple: "bg-purple-100 text-purple-700",
};

function RoleTag({ role, color }: { role: string; color: Member["tagColor"] }) {
    return (
        <div
            className={`flex shrink-0 items-center justify-center self-stretch rounded-full px-1.5 py-3 ${tagStyles[color]}`}
        >
            <span
                className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-widest [writing-mode:vertical-rl]"
                style={{ transform: "rotate(180deg)" }}
            >
                {role}
            </span>
        </div>
    );
}

export default function TeamCard({ member }: { member: Member }) {
    const [imageFailed, setImageFailed] = useState(false);
    const showPlaceholder = !member.image || imageFailed;

    return (
        <div className="group relative flex w-full flex-1 flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:w-[calc(33.333%-1rem)] md:flex-none">
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-emerald-600 transition-transform duration-300 group-hover:scale-x-100" />
            <div className="flex items-stretch gap-4">
                <RoleTag role={member.role} color={member.tagColor} />

                {showPlaceholder ? (
                    <div className="flex aspect-[3/4] flex-1 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100">
                        <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                            Picture
                        </span>
                    </div>
                ) : (
                    <div className="relative aspect-[3/4] flex-1 overflow-hidden rounded-lg bg-slate-100">
                        <Image
                            src={member.image as string}
                            alt={member.name}
                            fill
                            className="object-cover"
                            onError={() => setImageFailed(true)}
                        />
                    </div>
                )}
            </div>

            <div className="mt-6">
                <h3 className="font-[family-name:var(--font-name)] text-lg font-semibold text-slate-900">
                    {member.name}
                </h3>
                <div className="my-3 h-px w-full bg-slate-200" />
                <p className="text-sm leading-relaxed text-slate-500">{member.bio}</p>
            </div>
        </div>
    );
}