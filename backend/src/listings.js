const { search } = require('superagent');
const db = require('./db');

exports.getAll = async (req, res) => {
    //get all listings from database
    // console.log("here?");
    const listings = await db.getAllListings();
    /* if(listings.length === 0) {
        res.status(404).send();
    } */
    // console.log(listings);
    res.status(200).json(listings);
}

exports.getSearch = async (req, res) => {
    //get all listings from database
    //console.log("here?", req.params.search);
    let listings = await db.getBySearch(req.params.search);
    res.status(200).json(listings);
}