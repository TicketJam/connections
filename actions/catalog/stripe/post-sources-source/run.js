const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    source,
    amount,
    expand,
    mandate,
    metadata,
    owner,
    source_order,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/sources/${source}`,
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        ...(amount ? { amount } : {}),
        ...(expand ? { expand } : {}),
        ...(mandate ? { mandate } : {}),
        ...(metadata ? { metadata } : {}),
        ...(owner ? { owner } : {}),
        ...(source_order ? { source_order } : {}),
      }),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY, source }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_SOURCE: "A valid source field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
  if (typeof source !== "string") throw new Error(ERRORS.INVALID_SOURCE);
};
