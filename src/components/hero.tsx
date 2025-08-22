"use client";

import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Hero() {
	const words = [
		{
			text: "Hi,",
		},
		{
			text: "I'm",
		},
		{
			text: "Soumadeep",
			className: "text-blue-500 dark:text-blue-500",
		},
		{
			text: "Chatterjee",
			className: "text-blue-500 dark:text-blue-500",
		},
		
	];
	return (
		<section
			id="about"
			className="bg-white text-black dark:bg-black dark:text-white pt-32 pb-20 transition-colors fade-in">
			<div className="container mx-auto px-6 lg:px-8 text-center">
				{/* Heading */}
				{/* <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 typewriter-text">
					Hi, I'm{" "}
					<span className="text-primary">Soumadeep Chatterjee</span>
				</h1> */}
				<TypewriterEffect words={words} />

				{/* Description */}
				<div className="max-w-3xl mt-6 mx-auto text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
					B.Tech Computer Science student (2022–2026) passionate about
					learning and building through code. Started coding out of
					curiosity and fun, now experienced in creating tools like
					browser extensions and web apps. Constantly exploring new
					technologies, solving real-world problems, and building
					projects ranging from full-stack platforms to AI-driven
					solutions.
				</div>

				{/* Social Links */}
				<div className="mt-10 flex justify-center gap-4">
					<a
						href="https://www.linkedin.com/in/soumadeep-chatterjee-a779a4270/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80">
						<Linkedin size={20} />
						LinkedIn
					</a>

					<a
						href="https://github.com/SoumadeepCh"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg bg-zinc-200 text-black hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
						<Github size={20} />
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
