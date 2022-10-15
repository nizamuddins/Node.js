// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://cluster0.1dmjdbr.mongodb.net/myFirstDatabase")

import mongoose from "mongoose";
import config from "config"

async function connectDB() {
    try {

        await mongoose.connect(config.get("DB_URI"))
        console.log(`Mongo DB Connected`);
    } catch (error) {
        console.error(error)
    }
}


connectDB()