const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    mandate_notification: "string", // Required
    source: "string", // Required

    // expand: ["string"],
  };
};
