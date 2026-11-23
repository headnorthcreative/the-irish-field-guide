import { describe, expect, it } from "vitest";
import { stepErrors } from "./inquiry";

describe("inquiry rules", () => {
  it("rejects a party larger than the 7-seat V-Class", () => {
    expect(stepErrors(0, { travel_dates: "12 – 19 September", party_size: 8 })['party_size']).toBeDefined();
  });
  it("accepts a party of 7", () => {
    expect(stepErrors(0, { travel_dates: "12 – 19 September", party_size: 7 })).toEqual({});
  });
  it("requires at least one destination", () => {
    expect(stepErrors(1, { destinations: [], ancestry_search: false })['destinations']).toBeDefined();
  });
  it("requires a valid email to post the letter", () => {
    expect(stepErrors(2, { name: "Ruth", email: "nope" })['email']).toBeDefined();
  });
});
