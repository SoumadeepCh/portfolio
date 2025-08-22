"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

export default function Education() {
	const { theme } = useTheme();

	return (
		<section
			id="education"
			className={cn(
				"py-16 transition-colors",
				theme === "dark" ? "bg-black text-white" : "bg-white text-black"
			)}>
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-12">
					Education
				</h2>

				<div className="max-w-2xl mx-auto space-y-8">
					{/* College */}
					<div
						className={cn(
							"p-6 rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all",
							theme === "dark"
								? "bg-zinc-900 border-zinc-700"
								: "bg-zinc-50 border-zinc-200"
						)}>
						<div className="flex items-center gap-3 mb-2">
							<GraduationCap className="w-6 h-6 text-primary" />
							<h3 className="text-xl font-semibold">
								Hooghly Engineering & Technology College
							</h3>
						</div>
						<p
							className={cn(
								"text-md",
								theme === "dark"
									? "text-zinc-300"
									: "text-zinc-600"
							)}>
							B-Tech in Computer Science —{" "}
							<span className="font-medium">7.5 CGPA</span>
						</p>
						<p
							className={cn(
								"text-sm mt-1",
								theme === "dark"
									? "text-zinc-400"
									: "text-zinc-500"
							)}>
							2022 – 2026
						</p>
					</div>

					{/* School */}
					<div
						className={cn(
							"p-6 rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all",
							theme === "dark"
								? "bg-zinc-900 border-zinc-700"
								: "bg-zinc-50 border-zinc-200"
						)}>
						<div className="flex items-center gap-3 mb-2">
							<GraduationCap className="w-6 h-6 text-primary" />
							<h3 className="text-xl font-semibold">
								Bholananda National Vidyalaya
							</h3>
						</div>
						<p
							className={cn(
								"text-md",
								theme === "dark"
									? "text-zinc-300"
									: "text-zinc-600"
							)}>
							XII (CBSE) —{" "}
							<span className="font-medium">72%</span> (2022)
						</p>
						<p
							className={cn(
								"text-md",
								theme === "dark"
									? "text-zinc-300"
									: "text-zinc-600"
							)}>
							X (CBSE) — <span className="font-medium">86%</span>{" "}
							(2020)
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
