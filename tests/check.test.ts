import { Check } from "../src/check";

describe("check", () => {
    describe("verify", () => {
        it("should now throw if validation passes", () => {
            Check.verify(true, "error");
        });
    });
});