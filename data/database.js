import mongoose from "mongoose";

// DB connection:(And wrap in function:)

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'Todo',
        // writeConcern: { w: "majority" }
    }).then((c) => console.log(`Database connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
}