const Reader= require("./../utils/Reader");
const StudentService= require("./../services/StudentService");

class StudentController{
    static getAllStudents(){
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentService.getAllStudents(students);
    }

    static getStudentsWithCertification(){
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentService.getStudentsByCertification(students);
    }
    
    static getStudentsHaveCreditsOver500(){
        const students = Reader.readJsonFile("./visualpartners.json");
        return StudentService.getStudentsByCreditsOver500(students);
    }
}
module.exports=StudentController;
