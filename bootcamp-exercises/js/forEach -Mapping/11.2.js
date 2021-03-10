const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
};

const assignTeachersSubject = (id,subject) => {
    school.teachers[id].subjects.push(subject);
    console.log(school.teachers);
}

const addStudent = (id,name) => {
    school.teachers[id].students.push(name);
    console.log(school.teachers);
}
assignTeachersSubject(0,"Math")
addStudent(1,'ofir');