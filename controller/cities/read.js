import City from "../../models/City.js";

export default async (req, res) => {
    try {
        let busqueda = {};
        let ordenamiento = {};

        if (req.query.admin_) {
            busqueda.admin_id = req.query.admin_id;
        }
        if (req.query.city) {
            busqueda.city = new RegExp('^' + req.query.city, 'i');
        }
        if (req.query.sort) {
            ordenamiento.city = req.query.sort;
        }
        let allCities = await City.find(busqueda, 'country city photo smalldescription admin_id')
            .populate('admin_id', 'photo name mail -_id')
            .sort(ordenamiento)
        return res.status(200).json({
            success: true,
            message: 'cities found',
            response: allCities
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}