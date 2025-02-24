let students = [] , failedStudents = [] ,successStudents = [] ;

    function createStudent(name ,age ,mark) {
        return {name : name ,age : age ,mark : mark};
    }
  
        let omar = createStudent("Omar" ,21 ,40);
        let sami = createStudent("Sami" ,18 ,90);
        let yara = createStudent("Yara" ,20 ,75);
        let ahmad = createStudent("Ahmad" ,20 ,0);
        let salem = createStudent("salem" ,19,72);

        students.push(omar ,sami ,yara ,ahmad ,salem);
        console.log(students);
   

    students.forEach(Element => {
            if(Element.mark < 50){
                failedStudents.push(Element)
            }
            else
                successStudents.push(Element)
            })

        console.log(failedStudents);
        console.log(successStudents);