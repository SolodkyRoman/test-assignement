# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- The main thing I tried to achieve is to eliminate nested `if` statements to increase code readability.
- I moved repeated logic to a separate function `hashValue` to prevent possible bugs in the future when the logic in one place is changed and is forgotten for the second place. It also increases code readability by describing what is happening.
- I removed the last `if` check by using a conditional operator in the return statement. It reduced the number of lines of code.
- I moved constants out of the body to make the function more focused on the computational logic instead. I understand it's a matter of taste, but as we export only 1 function from the file I think it's worth it.
