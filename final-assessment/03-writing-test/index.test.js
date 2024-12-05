import { test } from "node:test";
import assert from "node:assert";

import { sum } from "./index.js";

test("hitung sum", () => {
  assert.equal(sum(1, 3), 4);
  assert.equal(sum(3, 1), 4);
  assert.equal(sum(1, 0), 1);
  assert.equal(sum(0, 3), 3);
  assert.equal(sum(0, 0), 0);
});
