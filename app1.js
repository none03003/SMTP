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

app.get("/", (req, res) => {
  res.render("bulk-email-form");
});

app.post("/bulk-emails", async (req, res) => {
  try {
    const emailList = req.body.emails.split("\n").map(email => email.trim());

    const collectionName = `contacts_${new Date().getTime()}`;

    const contactSchema = new mongoose.Schema(
      {
        _id: String, // Custom unique identifier
        email: String,
      },
      {
        _id: false,      // Disable _id field
        versionKey: false, // Disable version key (__v)
        collection: collectionName, // Use the dynamic collection name
      }
    );

    const Contact = mongoose.model("Contact", contactSchema);

    const emailPromises = emailList.map(async (_, index) => {
      const customId = `email_${new Date().getTime()}_${index}`;
      const contact = new Contact({
        _id: customId,
        email: _,
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

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/error", (req, res) => {
  res.render("error");
});

const server = app.listen(3000, () => {
    const port = server.address().port;
    const host = "http://localhost";
    console.log(`Server is listening at ${host}:${port}`);
  });
  
