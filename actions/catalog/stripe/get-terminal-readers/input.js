const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required

    // device_type: "bbpos_chipper2x",
    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // location: "string",
    // starting_after: "string",
    // status: "offline",
  };
};
