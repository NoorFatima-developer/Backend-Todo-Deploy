import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// Connect Db:(data/database mai pra hai..)
connectDB();
console.log(process.env.PORT);

//listen on port 4000:
app.listen(5000, () => {
    console.log(`Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
})

