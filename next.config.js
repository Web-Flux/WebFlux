const withImages = require("next-images");
module.exports = {
  webpack: withImages().webpack,
  publicRuntimeConfig: {
    backendUrl: `https://chintukiapi.herokuapp.com`,
  },
};
