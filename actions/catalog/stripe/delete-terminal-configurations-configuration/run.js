const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const { BUILDABLE_STRIPE_API_KEY, configuration } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "delete",
      url: `https://api.stripe.com/v1/terminal/configurations/${configuration}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, configuration }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_CONFIGURATION: "A valid configuration field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof configuration !== "string") throw new Error(ERRORS.INVALID_CONFIGURATION);
};
