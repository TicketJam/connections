const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required
    subscription_exposed_id: "string", // Required

    // expand: ["string"],
    // invoice_now: true,
    // prorate: true,
  };
};
