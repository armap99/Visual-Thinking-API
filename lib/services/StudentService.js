class StudentService{
    static getAllStudents(students){
        return students;
    }

    static getStudentsByCertification(students){
        return students.filter((student) => student.haveCertification == true);
    }

    static getStudentsByCreditsOver500(students){
        return students.filter((student) => student.credits > 500);
    }
}
module.exports=StudentService;