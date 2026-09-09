import { Dexie } from "dexie";
export type VisitRequest = { id: string; startsAt: string; seats: number };
export function capacityAfter(existing: number, request: VisitRequest, capacity: number): number {
  if (request.seats < 1 || existing + request.seats > capacity) throw new Error("容量不足");
  return existing + request.seats;
}
export function createVisitDatabase() {
  const database = new Dexie("museum-visits");
  database.version(1).stores({ requests: "id,startsAt" });
  return database;
}
