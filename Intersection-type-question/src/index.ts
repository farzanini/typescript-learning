type Teacher = {
  teacher_id: number;
  teacher_name: string;
  teacher_age: number;
};

type Student = {
  student_id: number;
  student_name: string;
  student_grade: number;
};

type intersected_type = Teacher & Student;

const University: intersected_type = {
  teacher_id: 187,
  teacher_name: "mr.bronze",
  teacher_age: 57,
  student_id: 10049,
  student_name: "farzan",
  student_grade: 97,
};

export { intersected_type };
