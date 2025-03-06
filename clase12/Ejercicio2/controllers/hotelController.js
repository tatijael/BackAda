const HotelModel = require('../models/hotelModel');
const HotelView = require('../views/hotelView');

function handleRequest(id) {
    const hotel = HotelModel.getHotelById(id);
    return HotelView.formatHotelResponse(hotel);
}

module.exports = { handleRequest };