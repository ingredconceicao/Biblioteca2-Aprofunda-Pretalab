import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    id: {type:String, required:true},
    title: {type:String, required:true},
    bookGenres:{type:String, required:true},
    author: {type:String, required:true},
    status: {type:String, required:true},
});

const bookModel = model('Book',bookSchema);
//  //