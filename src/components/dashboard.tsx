import Metric from "./metrics";
import PortScan from "./portscan";

export default function Dashboard() {
  return (
    <main className="px-2">
      <Metric />
      <PortScan />
    </main>
  );
}
