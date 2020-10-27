const express = require('express');
const { API_URL, API_KEY, PRODUCT_PATH } = require('../config/key');
const router = express.Router();

const setCORS = (res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
};

router.post("/product", (req, res) => {

    console.log('==============================');
    console.log('/api/insurance/product call');
    
    const goodAbnm = req.body.goodAbnm;
    console.log('goodAbnm : ', goodAbnm);

    let item;
    const axios = require('axios');
    axios.get(`${API_URL}${PRODUCT_PATH}?serviceKey=${API_KEY}&GOOD_ABNM=${goodAbnm}`).then(response => {
        console.log(response.data);
        item = response.data.response.body.items.item;

        setCORS(res);

        return res.status(200).json({
            success: true,
            products: item
        });
    });
    
});

router.post("/TERMS", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
});

router.post("/FEE", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
});

module.exports = router;