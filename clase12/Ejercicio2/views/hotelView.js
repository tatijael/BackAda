function formatHotelResponse(hotel) {
    if (!hotel) {
        return JSON.stringify({ error: 'Hotel no encontrado' });
    }

    const habitacionesDisponibles = hotel.habitaciones.filter(habitacion => habitacion.disponible);
    const respuesta = {
        id: hotel.id,
        nombre: hotel.nombre,
        habitacionesDisponibles: habitacionesDisponibles.length,
        habitaciones: habitacionesDisponibles
    };

    return JSON.stringify(respuesta);
}

module.exports = { formatHotelResponse };