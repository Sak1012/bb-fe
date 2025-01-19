import { cn } from "@/utils/utils";
import GridPattern from "@/components/ui/grid-pattern";
import Dashboard from "@/components/dashboard";
export default function Home() {
  return (
    <main className="flex flex-col px-24 py-2">
      <h1 className="text-9xl font-bold">BREACH Buddy</h1>
      <Dashboard />
      <GridPattern width={20} height={20} x={-1} y={-1} className={cn("")} />
    </main>
  );
}
