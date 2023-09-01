import { model,Schema,Types } from "mongoose";


let collection = "itineraries"
let schema = new Schema({
    name: { type:String,require:true },
    city_id: { type:Types.ObjectId,require:true,ref:'cities' },
    price: { type:Number, require:true },
    duration: { type:Number,require:true },
    tags: [{ type:String,require:true}],
    photo: { type:String,require:true}

},{
    timestamps: true
}
)

let Itinerary = model(collection,schema)
export default Itinerary