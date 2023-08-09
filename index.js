const express = require("express");
const axios = require("axios");

const server = express();

server.get("/Awari", async (req, res) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${req.query.cep}/json`);
        const addressData = response.data;
        return res.json(addressData);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching address data" });
    }
});

const PORT = 3333;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
