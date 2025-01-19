import axios from "axios";
import { PortStatus } from "../types";

export async function fetchPorts(): Promise<PortStatus[]> {
  const url = process.env.NEXT_PUBLIC_LOCAL_URL;
  const response = await axios.get<PortStatus[]>(
    `${url}/vulnerabilities/scan-all-ports`,
  );
  const openPorts = response.data.filter((port) => port.status === "open");
  console.log(openPorts);
  return openPorts;
}
