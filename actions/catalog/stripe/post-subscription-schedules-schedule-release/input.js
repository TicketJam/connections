const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    schedule: "string", // Required

    // expand: ["string"],
    // preserve_cancel_date: true,
  };
};
