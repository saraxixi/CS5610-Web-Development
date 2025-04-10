// responsible for all routing related to /tasks path
const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../db");
const { ObjectId } = require("mongodb");
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJWT = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
});

router.post("/", checkJWT, async (req, res) => {
  try {
    // we will recieve data and write it to db
    console.log("req.body ", req.body);
    // call addToDB
    const result = await db.addToDB(req.body);

    res.json(result);

    // res.send("data received");
    // res.redirect("/tasks");
  } catch (err) {
    console.log("post handler ", err);
  }
});
// show the form to add a new task
router.get("/newtask", (req, res) => {
  res.render("taskForm");
});
// this is the handler for /tasks
router.get("/", async (req, res) => {
  try {
    const data = await db.readAll();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos/"
  //   );
  //   res.json(response.data);
  // } catch (err) {
  //   console.log(err.message);
  // }
  //send a get request to jsonPlaceholder API and consume the promise using .then/.catch
  //   const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
  //   promise
  //     .then((response) => {
  //       res.json(response.data);
  //     })
  //     .catch((err) => console.log(err.status));
  //res is responsible to send data/files
  //   res.send("<h1>List of all tasks</h1>");
});

router.get("/:taskId", async (req, res) => {
  try {
    const data = await db.readOne({ _id: new ObjectId(req.params.taskId) });
    res.json(data);
  } catch (err) {
    console.log(err.message);
  }
  //send a get request to jsonPlaceholder API and consume the promise using async/await
  // try {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`
  //   );
  //   const userResponse = await axios.get(
  //     `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
  //   );
  //   res.render("task", {
  //     id: req.params.taskId,
  //     title: response.data.title,
  //     user: userResponse.data.name,
  //     completed: response.data.completed,
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
  //res is responsible to send data/files
  //   console.log(req.params.taskId);
  //   res.send(`<p>you are viewing task ${req.params.taskId}</p>`);
});
router.delete("/:taskId", async (req, res) => {
  console.log("in router delete ", req.params.taskId);
  try {
    const result = await db.deleteOne({ _id: new ObjectId(req.params.taskId) });
    console.log(result);
    return res.status(200).json({ message: "Task deleted" }); // ✅ Success response

    // res.redirect("/api/tasks");
  } catch (err) {
    console.log("delete router ", err);
  }
});
module.exports = router;