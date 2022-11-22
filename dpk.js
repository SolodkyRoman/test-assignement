const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const hashValue = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

const deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    candidate = event.partitionKey || hashValue(JSON.stringify(event));
  }

  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? hashValue(candidate)
    : candidate;
};

module.exports = {
  deterministicPartitionKey,
};
