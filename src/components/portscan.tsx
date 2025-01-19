"use client";

import { useEffect, useState } from "react";
import { fetchPorts } from "@/utils/fetch/fetchPorts";
import { PortStatus } from "@/utils/types";

export default function PortScan() {
  const [ports, setPorts] = useState<PortStatus[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getPorts() {
      try {
        const data = await fetchPorts();
        setPorts(data);
      } catch (err: any) {
        setError(
          err.response?.data?.message || err.message || "An error occurred",
        );
      }
    }
    getPorts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (ports.length === 0) {
    return <div>Scanning Open Ports.</div>;
  }

  return (
    <main className="mt-2">
      <h1 className="text-3xl font-bold">Open Ports</h1>
      <ul className="list-disc">
        {ports.map((port) => (
          <li key={port.port}>
            <strong>Port</strong>: {port.port}
          </li>
        ))}
      </ul>
    </main>
  );
}
