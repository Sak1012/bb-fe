import axios from "axios";
import { Metrics } from "../types";

export async function fetchMetrics(): Promise<Metrics> {
	const response = await axios.get<Metrics>("http://localhost:8080/metrics");
	return response.data;
}
