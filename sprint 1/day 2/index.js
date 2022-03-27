const express = require("express");
const app = express();

const port = 4000;
app.get("/", (req, res) => {
  return res.send("hello");
});

app.get("/books", (req, res) => {
  return res.send([
    {
      id: 1,
      "Book Name": "Rafi",
      Author: "Emmott",
    },
    {
      id: 2,
      "Book Name": "Ludvig",
      Author: "Maury",
    },
    {
      id: 3,
      "Book Name": "Jennine",
      Author: "Ardith",
    },
    {
      id: 4,
      "Book Name": "Kristan",
      Author: "Hermine",
    },
    {
      id: 5,
      "Book Name": "Janis",
      Author: null,
    },
    {
      id: 6,
      "Book Name": "Martina",
      Author: "Violante",
    },
    {
      id: 7,
      "Book Name": "Lizzy",
      Author: "Annissa",
    },
    {
      id: 8,
      "Book Name": "Melva",
      Author: "Beatrix",
    },
    {
      id: 9,
      "Book Name": "Thorvald",
      Author: null,
    },
    {
      id: 10,
      "Book Name": "Cristobal",
      Author: "Renee",
    },
  ]);
});

app.listen(port, () => {
  console.log("This is port 4000");
});
