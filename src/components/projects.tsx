"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

const projects = [
	{
		title: "Webular – Web Development Practice Platform",
		description:
			"An interactive platform to practice web development challenges. Features: User authentication, code submission, and an admin panel for CRUD operations on courses, contests, and problems.",
		technologies: [
			"Node.js",
			"Express.js",
			"MongoDB",
			"NextJS",
			"Tailwind",
		],
		githubLink: "https://github.com/SoumadeepCh/webular",
	},
	{
		title: "Graphite – Interview Mock Practice Platform",
		description:
			"A platform made to practice HTML, CSS, JS basics with questions and a code editor. Features: CRUD operations for creating questions for admins only.",
		technologies: ["HTML", "CSS", "JavaScript"],
		githubLink: "https://github.com/SoumadeepCh/graphite",
	},
	{
		title: "Vire – YouTube Clone",
		description:
			"Built a fully functional YouTube clone with video upload, playback, likes/dislikes, subscriptions, and comments. Real-time video uploading and interaction.",
		technologies: ["NextJS", "Node.js", "MongoDB", "Express"],
		githubLink: "https://github.com/SoumadeepCh/vire",
	},
];


export default function Projects() {
	const { theme } = useTheme();

	return (
		<section
			id="projects"
			className={cn(
				"py-16 transition-colors",
				theme === "dark" ? "bg-black text-white" : "bg-white text-black"
			)}>
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-12">
					My Projects
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<Card
							key={index}
							className={cn(
								"p-4 rounded-2xl border shadow-md hover:shadow-xl transition-all hover:-translate-y-1",
								theme === "dark"
									? "bg-zinc-900 border-zinc-700"
									: "bg-zinc-50 border-zinc-200"
							)}>
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									{project.title}
								</CardTitle>
								<CardDescription
									className={cn(
										"mt-2",
										theme === "dark"
											? "text-zinc-400"
											: "text-zinc-600"
									)}>
									{project.description}
								</CardDescription>
							</CardHeader>

							<CardContent>
								<h4 className="text-md font-semibold mb-3">
									Technologies:
								</h4>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<Badge
											key={tech}
											className={cn(
												"px-3 py-1 text-sm font-medium rounded-full transition",
												theme === "dark"
													? "bg-white/10 text-white hover:bg-white/20"
													: "bg-black/10 text-black hover:bg-black/20"
											)}>
											{tech}
										</Badge>
									))}
								</div>
							</CardContent>

							<CardFooter>
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										"flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition",
										theme === "dark"
											? "bg-white text-black hover:bg-white/80"
											: "bg-black text-white hover:bg-black/80"
									)}>
									<Github size={16} /> View on GitHub
								</a>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
