const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Should return partionKey field value if provided and it's as a string", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "test string",
      mockKey: 4,
    });
    expect(trivialKey).toBe("test string");
  });

  it("Should return JSON stringified partionKey field value if provided and it's not a string", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: ["Test", 19],
      mockKey: 4,
    });
    expect(trivialKey).toBe(JSON.stringify(["Test", 19]));
  });

  it("Should return hashed value if argument is a string", () => {
    const trivialKey = deterministicPartitionKey("Test sting");
    expect(trivialKey).toBe(
      "55dd6b52ff037fae3ce50a28756bfb2f336f158623df5113c47e127d9b3bbe8ca1fcdd3cc4ea72dd6e7e7da48fcbf6e8b8eea1343ae7b77222c467c934dd3b63"
    );
  });

  it("Should return hashed value if argument is a number", () => {
    const trivialKey = deterministicPartitionKey(3);
    expect(trivialKey).toBe(
      "73fb266a903f956a9034d52c2d2793c37fddc32077898f5d871173da1d646fb80bbc21a0522390b75d3bcc88bd78960bdb73be323ad5fc5b3a16089992957d3a"
    );
  });

  it("Should return hashed value if argument is an empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe(
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    );
  });

  it("Should return hashed value if argument is a string longer than 256", () => {
    const trivialKey = deterministicPartitionKey(
      "QufMORW1UNIZeBc22Lf6KqAfaItQwaaMHAt9DAyUWqrAgwSp9Gh2kfWFVKw4V9BjQXzExy8L3j5SOYgkej1hsPZDYI5oY6NG7fxMrX7AFSvkM8sgfW1jW0eqYVHrik3Vdr5etiU3qLdNAHIGaXthBAJRmtMKQxvaI8X9J8fZFtqPPaismGhR2McW1pdnTTDYMwyAqtO7zKrtnDtHlEkGuf01BhzlqOkJeHYqFeJOUHmAZFQjmzZY7g72M2s7iuMQq"
    );
    expect(trivialKey).toBe(
      "65a026f18f8e9abd027d48fbd9c848d881ac2729047157532cf3226a2ebaffb8af14a839c69cef65167028ba8f7f7aaa19e64ed1d3b33e84658fcdf2ca52326e"
    );
  });
});
