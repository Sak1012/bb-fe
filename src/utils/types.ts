export interface Metrics {
  cpuCount: number;
  disk: {
    totalDisk: number;
    usedDisk: number;
  };
  hostname: string;
  maxProcs: number;
  memory: {
    totalMemory: number;
    usedMemory: number;
  };
  os: string;
  status: string;
  upTime: string;
  username: string;
}

export interface PortStatus {
  port: number;
  status: "open" | "closed";
}
