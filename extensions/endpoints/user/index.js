const { ethers } = require("ethers");

module.exports = function registerEndpoint(router, { exceptions, database }) {
  const { ServiceUnavailableException } = exceptions;

  router.get("/:address", (req, res, next) => {
    database
      .raw(
        "select * from transactions where values->>'_account' = '" +
          ethers.utils.getAddress(req.params.address) +
          '\' order by "createdAt" desc'
      )
      .then((results) => res.json(results))
      .catch((error) => {
        throw new ServiceUnavailableException(error.message);
      });
  });
};
