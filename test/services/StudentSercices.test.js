const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

describe("Unit test for StudentService", () => {
    
    test("Get all students", () => {
        const studentsArray = Reader.readJsonFile("./visualpartners.json");
        const res = StudentService.getAllStudents(studentsArray);
        expect(res.length).toBe(51);
    });

    test("Students that have certification", () => {
        const studentsArray = Reader.readJsonFile("./visualpartners.json");
        const res = StudentService.getStudentsByCertification(studentsArray);
        expect(res.length).toBe(29);
    });

    test("Get students that have over 500 credits", () => {
        const studentsArray = Reader.readJsonFile("./visualpartners.json");
        const res = StudentService.getStudentsByCreditsOver500(studentsArray);
        expect(res.length).toBe(27);
    });
});