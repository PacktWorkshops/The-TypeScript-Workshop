interface Student {
  id: number;
  firstName: string;
  lastName: string;
  graduationYear: number;
  score: number;
}

const students: Student[] = [
  {
    id: 1,
    firstName: "Carma",
    lastName: "Atwel",
    graduationYear: 2010,
    score: 88,
  },
  {
    id: 2,
    firstName: "Shaun",
    lastName: "Knoller",
    graduationYear: 2011,
    score: 84,
  },
  {
    id: 3,
    firstName: "Florinda",
    lastName: "Zotto",
    graduationYear: 2010,
    score: 65,
  },
  {
    id: 4,
    firstName: "Sara-ann",
    lastName: "Andriuzzi",
    graduationYear: 2011,
    score: 66,
  },
  {
    id: 5,
    firstName: "Joice",
    lastName: "Olivie",
    graduationYear: 2011,
    score: 93,
  },
  {
    id: 6,
    firstName: "Farris",
    lastName: "Keijser",
    graduationYear: 2010,
    score: 79,
  },
  {
    id: 7,
    firstName: "Shelby",
    lastName: "Ragsdall",
    graduationYear: 2010,
    score: 95,
  },
  {
    id: 8,
    firstName: "Victoria",
    lastName: "Burrus",
    graduationYear: 2011,
    score: 88,
  },
  {
    id: 9,
    firstName: "Margarete",
    lastName: "Phette",
    graduationYear: 2010,
    score: 67,
  },
  {
    id: 10,
    firstName: "Kacie",
    lastName: "Wrintmore",
    graduationYear: 2010,
    score: 77,
  },
];

function getAverageScoreOf2010Students(students: Student[]): number {
  const relevantStudents = students.filter(
    (student) => student.graduationYear === 2010
  );
  const relevantStudentsScores = relevantStudents.map(
    (student) => student.score
  );
  const relevantStudentsTotalScore = relevantStudentsScores.reduce(
    (acc, item) => acc + item,
    0
  );

  return relevantStudentsTotalScore / relevantStudentsScores.length;
}

const average2010StudentsScore = getAverageScoreOf2010Students(students);
console.log(
  "The average score of students who graduated in 2010 is:",
  average2010StudentsScore
);
