const minuteHits = new Map<string, number[]>();
const hourHits = new Map<string, number[]>();

function pruneTimestamps(timestamps: number[], windowMs: number, now: number): number[] {
  return timestamps.filter((timestamp) => now - timestamp <= windowMs);
}

export function isRateLimited(ip: string, now = Date.now()): boolean {
  const minuteWindow = pruneTimestamps(minuteHits.get(ip) ?? [], 60_000, now);
  const hourWindow = pruneTimestamps(hourHits.get(ip) ?? [], 3_600_000, now);

  if (minuteWindow.length >= 5 || hourWindow.length >= 20) {
    minuteHits.set(ip, minuteWindow);
    hourHits.set(ip, hourWindow);
    return true;
  }

  minuteWindow.push(now);
  hourWindow.push(now);
  minuteHits.set(ip, minuteWindow);
  hourHits.set(ip, hourWindow);
  return false;
}
