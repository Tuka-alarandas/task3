// تعريف قائمة الطلاب كمصفوفة
let students = [];

// دالة لإضافة طالب جديد إلى القائمة
function addStudent(students, id, name) {
  try {
    if (!id || !name) {
      throw new Error("Student id and name cannot be empty.");
    }
    if (!Number.isInteger(id)) {
      throw new Error("Student id must be an integer.");
    }
    students.push({ id, name, status: "مسجل" });
    console.log(`Student "${name}" with ID ${id} added successfully.`);
  } catch (error) {
    console.error(error.message);
  }
}

// دالة لحذف طالب من القائمة بناءً على معرفه
function removeStudent(students, id) {
  try {
    let studentFound = false;
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1);
        studentFound = true;
        console.log(`Student with ID ${id} removed successfully.`);
        break;
      }
    }
    if (!studentFound) {
      throw new Error(`Student with ID ${id} not found.`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// دالة لطباعة قائمة الطلاب مع حالاتهم
function printStudents(students) {
  for (const student of students) {
    console.log(`Student ID: ${student.id}, Name: ${student.name}, Status: ${student.status}`);
  }
}

// أمثلة للاستخدام:
addStudent(students, 1, "علي");
addStudent(students, 2, "فاطمة");
addStudent(students, 3, "محمد");

printStudents(students);

removeStudent(students, 2);

printStudents(students);
