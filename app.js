const http = require("http");

const port = process.env.PORT || 3000;
const responseData = {
  message: "Hello, GFG Learner",
  articleData: {
    articleName: "How to send JSON response from NodeJS",
    category: "NodeJS",
    status: "published",
  },
  endingMessage: "Visit Geeksforgeeks.org for more",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
});

server.listen(port, () => {
  console.log(`Server running`);
});
