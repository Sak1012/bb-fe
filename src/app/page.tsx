import Image from "next/image";
import Dashboard from "@/components/dashboard";
export default function Home() {
	return (
		<main className="flex flex-col px-24 py-2">
			<h1 className="text-9xl font-bold">BREACH Buddy</h1>
			<Dashboard />
		</main>
	);
}
