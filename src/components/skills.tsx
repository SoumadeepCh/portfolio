"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const skills = {
	languages: ["Java", "C", "Python", "JavaScript", "TypeScript", "SQL"],
	webTechnologies: ["HTML", "CSS", "Tailwind CSS", "NextJS"],
	backendDatabases: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
	frameworksTools: ["React", "Git", "GitHub", "AI (LLM)", "Postman"],
};

export default function Skills() {
	const { theme } = useTheme();

	return (
		<section
			id="skills"
			className={cn(
				"py-16 transition-colors",
				theme === "dark" ? "bg-black text-white" : "bg-white text-black"
			)}>
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-12">
					My Skills
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Languages */}
					<Card
						className={cn(
							"p-4 rounded-2xl border shadow-md hover:shadow-xl transition-all hover:-translate-y-1",
							theme === "dark"
								? "bg-zinc-900 border-zinc-700"
								: "bg-zinc-50 border-zinc-200"
						)}>
						<CardHeader>
							<CardTitle className="text-xl font-semibold">
								Languages
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{skills.languages.map((skill) => (
									<Badge
										key={skill}
										className={cn(
											"px-3 py-1 text-sm font-medium rounded-full cursor-default transition",
											theme === "dark"
												? "bg-white/10 text-white hover:bg-white/20"
												: "bg-black/10 text-black hover:bg-black/20"
										)}>
										{skill}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Web Technologies */}
					<Card
						className={cn(
							"p-4 rounded-2xl border shadow-md hover:shadow-xl transition-all hover:-translate-y-1",
							theme === "dark"
								? "bg-zinc-900 border-zinc-700"
								: "bg-zinc-50 border-zinc-200"
						)}>
						<CardHeader>
							<CardTitle className="text-xl font-semibold">
								Web Technologies
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{skills.webTechnologies.map((skill) => (
									<Badge
										key={skill}
										className={cn(
											"px-3 py-1 text-sm font-medium rounded-full cursor-default transition",
											theme === "dark"
												? "bg-white/10 text-white hover:bg-white/20"
												: "bg-black/10 text-black hover:bg-black/20"
										)}>
										{skill}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Backend & Databases */}
					<Card
						className={cn(
							"p-4 rounded-2xl border shadow-md hover:shadow-xl transition-all hover:-translate-y-1",
							theme === "dark"
								? "bg-zinc-900 border-zinc-700"
								: "bg-zinc-50 border-zinc-200"
						)}>
						<CardHeader>
							<CardTitle className="text-xl font-semibold">
								Backend & Databases
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{skills.backendDatabases.map((skill) => (
									<Badge
										key={skill}
										className={cn(
											"px-3 py-1 text-sm font-medium rounded-full cursor-default transition",
											theme === "dark"
												? "bg-white/10 text-white hover:bg-white/20"
												: "bg-black/10 text-black hover:bg-black/20"
										)}>
										{skill}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Frameworks & Tools */}
					<Card
						className={cn(
							"p-4 rounded-2xl border shadow-md hover:shadow-xl transition-all hover:-translate-y-1",
							theme === "dark"
								? "bg-zinc-900 border-zinc-700"
								: "bg-zinc-50 border-zinc-200"
						)}>
						<CardHeader>
							<CardTitle className="text-xl font-semibold">
								Frameworks & Tools
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{skills.frameworksTools.map((skill) => (
									<Badge
										key={skill}
										className={cn(
											"px-3 py-1 text-sm font-medium rounded-full cursor-default transition",
											theme === "dark"
												? "bg-white/10 text-white hover:bg-white/20"
												: "bg-black/10 text-black hover:bg-black/20"
										)}>
										{skill}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
