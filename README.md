# CheckVerify

A simple library for checking preconditions on functions. Heavily inspired by [Guava's Precondition](https://guava.dev/releases/19.0/api/docs/com/google/common/base/Preconditions.html).

Methods starting with `verify` throw on failure, while methods starting with `is` return `boolean`.

## Sample usages

```typescript
import { Check } from "@awkewainze/checkverify";

function doThing(param1: number, param2: string): void {
    Check.verifyPositive(param1); // If `param1 <= 0` then throws generic error.
    Check.verifyNotNullUndefinedOrEmpty(param2); // If param is `null`, `undefined`, or an empty string (after being trimmed) then throws generic error.
    Check.verify()
    // Do things...
}
```

```typescript
import { Check } from "@awkewainze/checkverify";

function doThing(param1: number): void {
    if (!Check.isPositive(param1)) {
        param1 = 1;
    }

    // Do things...
}
```

For more examples, check the `check.test.ts` file!

## Custom errors

To throw your own error or message, just pass as the second parameter.

```typescript
import { Check } from "@awkewainze/checkverify";

function doThing(param1: number, param2: string): void {
    Check.verifyPositive(param1, "param1 was not positive"); // Throws error with message provided.
    Check.verifyNotNullUndefinedOrEmpty(param2, new Error("param2 was null or empty"));

    // Do things...
}
```

### Notes

I will slowly add more useful checks over time as I need them, I just hate having to repeat code in multiple projects, and the `verify` methods make error handling super easy.
