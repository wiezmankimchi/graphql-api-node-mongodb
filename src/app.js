import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";

import schema from "./schema";

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:32770/gql_db",
  { useNewUrlParser: true }
);

const start = "Welcome to node-starter-kit";

const app = express();
const PORT = 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
      user: "1"
    }
  })
);

app.get("/", (req, res) => {
  res.send(start);
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
