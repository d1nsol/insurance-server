const express = require('express');
const { API_URL, API_KEY, PRODUCT_PATH, TERMS_PATH, FEE_CAL_PATH } = require('../config/key');
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
    axios.get(`${API_URL}${PRODUCT_PATH}?serviceKey=${API_KEY}&GOOD_ABNM=`+encodeURI(`${goodAbnm}`)).then(response => {
        item = response.data.response.body.items.item;

        setCORS(res);

        return res.status(200).json({
            success: true,
            products: item
        });
    });
    
});

router.post("/terms", (req, res) => {
    
    console.log('==============================');
    console.log('/api/insurance/terms call');

    const goodNm = req.body.goodNm;
    console.log('goodNm : ', goodNm);

    let item;
    const axios = require('axios');
    axios.get(`${API_URL}${TERMS_PATH}?serviceKey=${API_KEY}&GOOD_NM=`+encodeURI(`${goodNm}`)).then(response => {
        item = response.data.response.body.items.item;

        setCORS(res);

        return res.status(200).json({
            success: true,
            terms: item
        });
    }).catch(error => {
        console.log(error);
    });
});

router.post("/FEE", (req, res) => {
});

module.exports = router;