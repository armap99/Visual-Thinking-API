const StudentController = require("./../../lib/controllers/StudentController");

describe("Unit test for StudentController", () => {
    test("Gett all students", () => {
        const res = StudentController.getAllStudents();
        expect(res.length).toBe(51);
    });
    test("Get students with certificacion", () => {
        const res = StudentController.getStudentsWithCertification();
        expect(res.length).toBe(29);
    });
    test("Gett students with 500 credits", () => {
        const res = StudentController.getStudentsHaveCreditsOver500();
        expect(res.length).toBe(27);
    });
});