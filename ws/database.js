const mongoose = require("mongoose");
const URI =
  "mongodb+srv://salaoUser:g8Uz1OLPeDGIMfks@clusterdev.4o2nb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is Up!"))
  .catch(() => console.log(err));
