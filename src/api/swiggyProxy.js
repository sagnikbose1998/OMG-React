const axios = require("axios");
const cors = require("cors")();

module.exports = async (req, res) => {
  try {
    // Enable CORS
    await cors(req, res);

    // Make a GET request to the Swiggy API
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830181&lng=88.4131218&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // Send the response from the Swiggy API back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
