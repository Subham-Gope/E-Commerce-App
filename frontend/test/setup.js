import { beforeEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => {
  cleanup();
  vi.clearAllMocks();
});
