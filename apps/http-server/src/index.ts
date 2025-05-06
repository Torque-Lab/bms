import { client } from "@repo/db/client";
import express from "express";

const app = express();

app.get("/greet", (req, res) => {
  res.send("hi welcome");
});

app.use(express.json());
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await client.user.create({
    data: {
      email: username,
      password: password,
    },
  });
  res.json({
    messages: "Signup successfull",
    id: user.id,
  });
});

app.listen(3002, () => {
  console.log("http-sever running on port 3002");
});
