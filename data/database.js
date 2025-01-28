import mongoose from "mongoose";

// DB connection:(And wrap in function:)

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'Todo',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 60000,
        socketTimeoutMS: 60000,
        // writeConcern: { w: "majority" }
        // cluster ka url get krny klye meny ye use kea hai: ${c.connection.host}
    }).then((c) => console.log(`Database connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
}