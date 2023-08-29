import Itinerary from "../../models/Itinerary.js"

export default async (req, res, next) => {
    try {
        let queries = {}
        if(req.query.city_id){
            queries.city_id = req.query.city_id
        }
        let all = await Itinerary
        .find( queries );
        return res.status(200).json({
            success: true,
            message: "Itineraries found!",
            response: all,
        });
    } catch (error) {
        next(error)
    }
};