import Itinerary from "../../models/Itinerary.js"

export default async (req, res, next) => {
    try {
        let queries = {}
        if(req.query.city_id){
            queries.city_id = req.query.city_id
        }
        let allItineraries = await Itinerary.find(queries );
        return res.status(200).json({
            success: true,
            message: "Itineraries found!",
            response: allItineraries,
        });
    } catch (error) {
        next(error)
    }
};