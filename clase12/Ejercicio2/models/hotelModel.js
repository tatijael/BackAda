const fs = require('fs');
const path = require('path');

const hotelsFilePath = path.join(__dirname, '../hotels.json');

function getHotelById(id) {
    const hotels = JSON.parse(fs.readFileSync(hotelsFilePath, 'utf-8'));
    return hotels.find(hotel => hotel.id === id);
}

module.exports = { getHotelById };