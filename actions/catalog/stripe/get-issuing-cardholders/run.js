const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    created,
    email,
    ending_before,
    expand,
    limit,
    phone_number,
    starting_after,
    status,
    type,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.stripe.com/v1/issuing/cardholders",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        ...(created ? { created } : {}),
        ...(email ? { email } : {}),
        ...(ending_before ? { ending_before } : {}),
        ...(expand ? { expand } : {}),
        ...(limit ? { limit } : {}),
        ...(phone_number ? { phone_number } : {}),
        ...(starting_after ? { starting_after } : {}),
        ...(status ? { status } : {}),
        ...(type ? { type } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
};
