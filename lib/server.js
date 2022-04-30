const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/students", (request, response) => {
    const student = StudentController.getAllStudents();
    response.json({type: "students", students: student});
});

app.get("/students/certificated", (request, response) => {
    const student = StudentController.getStudentsWithCertification();
    response.json({type: "certificated", students: student});
});

app.get("/students/credits", (request, response) => {
    const student = StudentController.getStudentsHaveCreditsOver500();
    response.json({type: "credits", students: student});
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});