import axios from "axios";
import { Metrics } from "../types";

export async function fetchMetrics(): Promise<Metrics> {
  const url = process.env.NEXT_PUBLIC_LOCAL_URL;
  const response = await axios.get<Metrics>(`${url}/metrics`);
  return response.data;
}
