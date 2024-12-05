import { test } from "node:test";
import assert from "node:assert";

import sum from "./index.js";

test("sum sukses", () => {
  assert.equal(sum(1, 4), 5);
  assert.equal(sum(0, 4), 4);
  assert.equal(sum(1, 0), 1);
  assert.equal(sum(0, 0), 0);
});

test("sum dengan nilai string", () => {
  assert.equal(sum("1", 4), 0);
  assert.equal(sum(1, "4"), 0);
  assert.equal(sum("1", "4"), 0);
});

test("sum dengan nilai negatif", () => {
  assert.equal(sum(-1, 4), 0);
  assert.equal(sum(1, -4), 0);
  assert.equal(sum(-1, -4), 0);
});
