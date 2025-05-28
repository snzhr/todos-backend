const express = require('express');
const app = express();
const todosRouter = require("./routes");
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Todo app");
});

app.use("/todos", todosRouter);


app.listen(3000);
