const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/data", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));

const collectionSchema = new mongoose.Schema({
  email: String
});

app.get("/", (req, res) => {
  res.render("bulk-email-form");
});

app.post("/bulk-emails", async (req, res) => {
  try {
    const emailList = req.body.emails.split("\n").map(email => email.trim());

    const collectionName = `contacts_${new Date().getTime()}`;

    const Contact = mongoose.model(collectionName, collectionSchema);

    const emailPromises = emailList.map(async (_, index) => {
      const contact = new Contact({
        email: _
      });
      await contact.save();
    });

    await Promise.all(emailPromises);

    res.redirect("/success");
  } catch (error) {
    console.error(error);
    res.redirect("/error");
  }
});

app.get("/success", async (req, res) => {
  try {
    const collectionNames = await mongoose.connection.db.listCollections().toArray();
    const collections = collectionNames.map(collection => collection.name);
    res.render("success", { collections });
  } catch (error) {
    console.error(error);
    res.render("error");
  }
});

app.get("/download/:collectionName", async (req, res) => {
  const collectionName = req.params.collectionName;

  try {
    const Contact = mongoose.model(collectionName, collectionSchema);
    const data = await Contact.find({}, { _id: 0, __v: 0 });

    res.setHeader("Content-Disposition", `attachment; filename=${collectionName}.json`);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/error", (req, res) => {
  res.render("error");
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  const host = "http://localhost";
  console.log(`Server is listening at ${host}:${port}`);
});
