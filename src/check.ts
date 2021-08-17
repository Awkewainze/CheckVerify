/**
 * Class contain methods for checking conditions.
 *
 * Based on [Guava's Preconditions]{@link https://guava.dev/releases/19.0/api/docs/com/google/common/base/Preconditions.html}.
 *
 * Methods starting with `verify` throw on failure, while methods starting with `is` return `boolean`.
 */

 export class Check {
    /**
     * Throws if condition is false
     * @param condition Throws if false.
     * @param errorOrMsg Error or message to be used instead of generic.
     */
    static verify(condition: boolean, errorOrMsg?: string | Error): void {
        if (!condition) {
            this.throwBasedOnType(errorOrMsg || "Condition failed");
        }
    }

    /**
     * Throws if value is `null` or `undefined`.
     * @param value Throws if `null` or `undefined`.
     * @param errorOrMsg Error or message to be used instead of generic.
     */
    static verifyNotNullOrUndefined<T>(value: T, errorOrMsg?: string | Error): void {
        if (this.isNullOrUndefined(value)) {
            this.throwBasedOnType(errorOrMsg || `Condition failed - Value is ${value}`);
        }
    }

    /**
     * Throws if value is `null`, `undefined`, not a string, or empty string.
     * @param value Throws if `null`, `undefined`, not a string, or is an empty string.
     * @param errorOrMsg Error or message to be used instead of generic.
     */
    static verifyNotNullUndefinedOrEmpty(value: string, errorOrMsg?: string | Error): void {
        if (this.isNullUndefinedOrEmpty(value)) {
            if (typeof value !== "string") {
                value = "<not a string>";
            } else if (value === "") {
                value = "<empty string>";
            }
            this.throwBasedOnType(errorOrMsg || `Condition failed - Value is ${value}`);
        }
    }

    /**
     * Throws if value is `null`, `undefined`, not a string, or whitespace.
     * @param value Throws if `null`, `undefined`, not a string, or is an empty string.
     * @param errorOrMsg Error or message to be used instead of generic.
     */
     static verifyNotNullUndefinedOrWhitespace(value: string, errorOrMsg?: string | Error): void {
        if (this.isNullUndefinedOrEmpty(value)) {
            if (typeof value !== "string") {
                value = "<not a string>";
            } else if (value.trim() === "") {
                value = "<whitespace>";
            }
            this.throwBasedOnType(errorOrMsg || `Condition failed - Value is ${value}`);
        }
    }

    /**
     * Throws if value is not a number, zero, or negative.
     * @param value Throws if not a number, zero, or negative.
     * @param errorOrMsg Error or message to be used instead of generic.
     */
    static verifyPositive(value: number, errorOrMsg?: string | Error): void {
        if (!this.isPositive(value)) {
            this.throwBasedOnType(errorOrMsg || `Condition failed - Expected positive - Value is ${value}`);
        }
    }

    /**
     * Throws if value is not a number or negative.
     * @param value Throws if not a number or negative.
     * @param errorOrMsg Error or message to be used instead of generic.
     */
    static verifyNotNegative(value: number, errorOrMsg?: string | Error): void {
        if (!this.isNotNegative(value)) {
            this.throwBasedOnType(errorOrMsg || `Condition failed - Expected not negative - Value is ${value}`);
        }
    }

    /**
     * Throws if value is not a number or integer.
     * @param value Throws if not a number or integer.
     * @param errorOrMsg Error or message to be used instead of generic.
     */
    static verifyInteger(value: number, errorOrMsg?: string | Error): void {
        if (!this.isInteger(value)) {
            this.throwBasedOnType(errorOrMsg || `Condition failed - Expected integer - Value is ${value}`);
        }
    }

    /**
     * Checks if a value is `null` or `undefined`.
     * @param value Value to check if `null` or `undefined`.
     * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
     */
    static isNullOrUndefined<T>(value?: T): boolean {
        return value === null || value === undefined;
    }

    /**
     * Checks if a value is `null`, not a `string`, or an empty `string`.
     * @param value Value to check if `null`, not a `string`, or an empty `string`.
     * @returns `true` if the value is `null`, not a `string`, or an empty `string`, otherwise `false`.
     */
    static isNullUndefinedOrEmpty(value?: string): boolean {
        return value === null || typeof value !== "string" || value === "";
    }

    /**
     * Checks if a value is `null`, not a `string`, or a `string` containing only whitespace characters (including no characters).
     * @param value Value to check if `null`, not a `string`, or a `string` containing only whitespace characters (including no characters).
     * @returns `true` if the value is `null`, not a `string`, or a `string` containing only whitespace characters (including no characters), otherwise `false`.
     */
     static isNullUndefinedOrWhitespace(value?: string): boolean {
        return value === null || typeof value !== "string" || value.trim() === "";
    }

    /**
     * Checks if a value is a `number` or `bigint` and positive.
     * @param value Value to check if a `number` or `bigint` and positive.
     * @returns `true` if the value is a `number` or `bigint` and positive, otherwise `false`.
     */
    static isPositive(value: number | bigint): boolean {
        return this.isOneOfTypes(value, ["number", "bigint"]) && value > 0;
    }

    /**
     * Checks if a value is a `number` or `bigint` and not positive.
     * @param value Value to check if is a `number` or `bigint` and not positive.
     * @returns `true` if the value is a `number` or `bigint` and not positive, otherwise `false`.
     */
     static isNotPositive(value: number | bigint): boolean {
        return this.isOneOfTypes(value, ["number", "bigint"]) && value <= 0;
    }

    /**
     * Checks if a value is a `number` or `bigint` and negative.
     * @param value Value to check if is a `number` or `bigint` and negative.
     * @returns `true` if the value is a `number` or `bigint` and negative, otherwise `false`.
     */
     static isNegative(value: number | bigint): boolean {
        return this.isOneOfTypes(value, ["number", "bigint"]) && value < 0;
    }

    /**
     * Checks if value is a `number` or `bigint` and not negative.
     * @param value To check if is a `number` or `bigint` and not negative.
     * @returns `true` if the value is a `number` or `bigint` and not negative, otherwise `false`.
     */
    static isNotNegative(value: number | bigint): boolean {
        return this.isOneOfTypes(value, ["number", "bigint"]) && value >= 0;
    }

    /**
     * Checks if a value is a `number` or `bigint` and between two inclusive bounds.
     * @param value Value to check if is a `number` or `bigint`, and is between bound1 and bound2 inclusively.
     * @param bound1 Bound to check is value is between this and other.
     * @param bound2 Bound to check is value is between this and other.
     * @returns `true` if the value is a `number` or `bigint` between or equal to the two bounds if they are `number` or `bigint`, otherwise `false`.
     */
    static isBetweenInclusive(value: number | bigint, bound1: number | bigint, bound2: number | bigint): boolean {
        return this.isBetween(value, bound1, bound2, true);
    }

    /**
     * Checks if a value is a `number` or `bigint` and between two exclusive bounds.
     * @param value Value to check if is a `number` or `bigint`, and is between bound1 and bound2 exclusively.
     * @param bound1 Bound to check is value is between this and other.
     * @param bound2 Bound to check is value is between this and other.
     * @returns `true` if the value is a `number` or `bigint` between the two bounds if they are `number` or `bigint`, otherwise `false`.
     */
    static isBetweenExclusive(value: number | bigint, bound1: number | bigint, bound2: number | bigint): boolean {
        return this.isBetween(value, bound1, bound2, false);
    }

    /**
     * Checks if a value is a `number` or `bigint` (or bigint) and is an integer.
     * @param value Value to check if is an integer.
     * @returns `true` if the value is a `number` or `bigint` and is an integer, otherwise `false`.
     */
    static isInteger(value: number | bigint): boolean {
        return value !== null
            && this.isOneOfTypes(value, ["bigint", "number"])
            && (typeof value === "bigint" || Math.floor(value) === value);
    }

    /**
     * Checks if a value is one of the types provided.
     * @param value Value to check if is in types array.
     * @param types Array of types to check in.
     * @returns `true` if the value type is in provided array, otherwise `false`.
     */
    static isOneOfTypes<T>(value: T, types: Array<TypeString>): boolean {
        return value !== null && Array.isArray(types) && types.includes(typeof value); 
    }

    private static isBetween(value: number | bigint, bound1: number | bigint, bound2: number | bigint, inclusiveBounds: boolean): boolean {
        if(!(this.isOneOfTypes(value, ["bigint", "number"])
            && this.isOneOfTypes(bound1, ["bigint", "number"])
            && this.isOneOfTypes(bound2, ["bigint", "number"]))) {
                return false;
        }

        let upper: number | bigint;
        let lower: number | bigint;

        if (bound1 > bound2) {
            upper = bound1;
            lower = bound2;
        } else {
            upper = bound2;
            lower = bound1;
        }

        if (inclusiveBounds) {
            return value >= lower && value <= upper;
        }

        return value > lower && value < upper;
    }

    private static throwBasedOnType(errorOrMsg: string | Error): void {
        if (!this.isNullOrUndefined(errorOrMsg)) {
            if (typeof errorOrMsg == "string") {
                throw new Error(errorOrMsg);
            }
            if (errorOrMsg instanceof Error) {
                throw errorOrMsg;
            }
        }
    }
}