import test from "node:test";
import assert from "node:assert/strict";
import { capacityAfter } from "../dist/planner.js";
test("确认前校验容量", () => assert.equal(capacityAfter(3, { id:"x", startsAt:"2026-04-01T09:00:00Z", seats:2 }, 5), 5));
test("满员时拒绝请求", () => assert.throws(() => capacityAfter(5, { id:"x", startsAt:"2026-04-01T09:00:00Z", seats:1 }, 5)));
