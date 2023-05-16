type Teacher = {
  teacher_id: number;
  teacher_name: string;
  teacher_age: string;
};

type Student = {
  student_id: number;
  student_name: string;
  student_grade: string;
};

type intersected_type = Teacher & Student;

const University: intersected_type = {
  name: "mr.bronze",
  field: "computer sience",
  class: "101",
  department: "computer",
};

export { intersected_type };
