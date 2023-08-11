import { model,Schema } from "mongoose";

let collection = 'users'

let schema = new Schema({
    name: { type:String,required:true },                //por default TODOS los datos son opcionales (required:false)
    lastName: { type:String },                          //si es opcional NO NECESITO agregar el required
    mail: { type:String,required:true,unique:true },    //unique:true comprueba que el mail SEA UNICO (no hay mails duplicados)
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" },    //default vuelve al parametro OPCIONAL, en caso que el cliente mande la foto, la usa, sino: USA LA FOTO DEFAULT (DARTH VADER)
    password: { type:String,required:true },
    country: { type:String,required:true }
})

let User = model(collection, schema)
export default User