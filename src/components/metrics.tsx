"use client";
import { useEffect, useState } from "react";
import { fetchMetrics } from "@/utils/fetch/fetchMetrics";
import { Metrics } from "@/utils/types";

export default function Metric() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getMetrics() {
      try {
        const data = await fetchMetrics();
        setMetrics(data);
      } catch (err: any) {
        setError(
          err.response?.data?.message || err.message || "An error occurred",
        );
      }
    }
    getMetrics();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!metrics) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1 className="text-3xl font-bold">Metrics</h1>
      <ul>
        <li>
          <strong>Hostname:</strong> {metrics.hostname}
        </li>
        <li>
          <strong>Username:</strong> {metrics.username}
        </li>
        <li>
          <strong>OS:</strong> {metrics.os}
        </li>
        <li>
          <strong>CPU Count:</strong> {metrics.cpuCount}
        </li>
        <li>
          <strong>Max Procs:</strong> {metrics.maxProcs}
        </li>
        <li>
          <strong>Memory:</strong> {metrics.memory.usedMemory} MB /{" "}
          {metrics.memory.totalMemory} MB
        </li>
        <li>
          <strong>Disk:</strong> {metrics.disk.usedDisk} MB /{" "}
          {metrics.disk.totalDisk} MB
        </li>
        <li>
          <strong>Ulitime:</strong> {metrics.upTime}
        </li>
        <li>
          <strong>Status:</strong> {metrics.status}
        </li>
      </ul>
    </main>
  );
}
