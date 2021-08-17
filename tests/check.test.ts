import { Check } from "../src/check";

describe("check", () => {
    describe("verify", () => {
        it("should not throw if validation passes", () => {
            const x = 2;
            Check.verify(x === 2);
        });

        it("should throw if validation fails", () => {
            try {
                const x: number = 2;
                Check.verify(x === 3);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw error provided if validation fails", () => {
            const err = new Error("error");
            try {
                const x: number = 2;
                Check.verify(x === 3, err);
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e).toBe(err);
            }
        });

        it("should throw error with message provided if validation fails", () => {
            try {
                const x: number = 2;
                Check.verify(x === 3, "error");
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e.message).toBe("error");
            }
        });
    });

    describe("verifyNotNullOrUndefined", () => {
        it("should not throw if the provided argument is not null or undefined", () => {
            Check.verifyNotNullOrUndefined(2, "error");
        });

        it("should not throw if the provided argument is empty string", () => {
            Check.verifyNotNullOrUndefined("");
        });

        it("should not throw if the provided argument is whitespace", () => {
            Check.verifyNotNullOrUndefined(" \t\r\n");
        });

        it("should throw if the provided argument is null", () => {
            try {
                Check.verifyNotNullOrUndefined(null);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw if the provided argument is undefined", () => {
            try {
                Check.verifyNotNullOrUndefined(undefined);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw error provided if validation fails", () => {
            const err = new Error("error");
            try {
                Check.verifyNotNullOrUndefined(null, err);
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e).toBe(err);
            }
        });

        it("should throw error with message provided if validation fails", () => {
            try {
                Check.verifyNotNullOrUndefined(null, "error");
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e.message).toBe("error");
            }
        });
    });

    describe("verifyNotNullUndefinedOrEmpty", () => {
        it("should not throw if the provided argument is not null, undefined, or empty", () => {
            Check.verifyNotNullUndefinedOrEmpty("Test", "error");
        });

        it("should not throw if the provided argument is whitespace", () => {
            Check.verifyNotNullUndefinedOrEmpty(" \t\r\n");
        });

        it("should throw if the provided argument is null", () => {
            try {
                Check.verifyNotNullUndefinedOrEmpty(null as unknown as string);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw if the provided argument is undefined", () => {
            try {
                Check.verifyNotNullUndefinedOrEmpty(undefined as unknown as string);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw if the provided argument is empty string", () => {
            try {
                Check.verifyNotNullUndefinedOrEmpty("");
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should not throw if the provided argument is whitespace", () => {
            try {
                Check.verifyNotNullUndefinedOrEmpty(" ");
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw error provided if validation fails", () => {
            const err = new Error("error");
            try {
                Check.verifyNotNullUndefinedOrEmpty(null as unknown as string, err);
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e).toBe(err);
            }
        });

        it("should throw error with message provided if validation fails", () => {
            try {
                Check.verifyNotNullUndefinedOrEmpty(null as unknown as string, "error");
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e.message).toBe("error");
            }
        });
    });

    describe("verifyNotNullUndefinedOrWhitespace", () => {
        it("should not throw if the provided argument is not null, undefined, or whitespace", () => {
            Check.verifyNotNullUndefinedOrWhitespace("Test", "error");
        });

        it("should throw if the provided argument is null", () => {
            try {
                Check.verifyNotNullUndefinedOrWhitespace(null as unknown as string);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw if the provided argument is undefined", () => {
            try {
                Check.verifyNotNullUndefinedOrWhitespace(undefined as unknown as string);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw if the provided argument is empty string", () => {
            try {
                Check.verifyNotNullUndefinedOrWhitespace("");
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw if the provided argument is whitespace", () => {
            try {
                Check.verifyNotNullUndefinedOrWhitespace(" \t\r\n");
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });

        it("should throw error provided if validation fails", () => {
            const err = new Error("error");
            try {
                Check.verifyNotNullUndefinedOrWhitespace(null as unknown as string, err);
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e).toBe(err);
            }
        });

        it("should throw error with message provided if validation fails", () => {
            try {
                Check.verifyNotNullUndefinedOrWhitespace(null as unknown as string, "error");
                fail("Should fail on failed verify");
            } catch(e) {
                expect(e.message).toBe("error");
            }
        });
    });

    describe("verifyNotNegative", () => {
        it("should not throw if the provided argument is not negative", () => {
            Check.verifyNotNegative(1);
        });
        it("should throw if the provided argument is negative", () => {
            try {
                Check.verifyNotNegative(-1);
                fail("Should fail on failed verify");
            } catch(e) {
                // Pass
            }
        });
    });

    describe("verifyInteger", () => {

    });

    describe("isNullOrUndefined", () => {

    });

    describe("isNullUndefinedOrEmpty", () => {

    });

    describe("isNullUndefinedOrWhitespace", () => {

    });

    describe("isPositive", () => {

    });

    describe("isNotPositive", () => {

    });

    describe("isNegative", () => {

    });

    describe("isNotNegative", () => {

    });

    describe("isBetweenInclusive", () => {

    });

    describe("isBetweenExclusive", () => {

    });

    describe("isInteger", () => {

    });

    describe("isOneOfTypes", () => {

    });
});