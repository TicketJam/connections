const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    MONGODB_CONNECTION_KEY: $env.MONGODB_CONNECTION_KEY, // Required
    collection: "collection-1", // Required
    id: "61d62cf94bed0700133c866a", // Required

    // convertToObjectId: true,
  };
};
