import express from 'express';

const app = express();
const PORT = 3000;

// Configure Handlebars

app.set('view engine', 'hbs');

// Middleware to parse POST form data
app.use(express.urlencoded({ extended: true }));

// In-memory students (pre-filled)
const students = [
  { id: 1, name: 'Filipe', email: 'filipe@mail.pt' },
  { id: 2, name: 'Joao', email: 'joao@mail.pt' },
  { id: 3, name: 'Ana', email: 'ana@mail.pt' }
];

// 1. List all students
app.get('/students', getStudents)

// 2. Student details
app.get('/students/:id',getStudentsById)

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});

function getStudents(req, res){
  res.render('students', { title: 'Student List', students })
}

function getStudentsById(req, res){
  const id = req.params.id
  const student = students.find(p => p.id == id);
  console.log(student.id)
  res.render('student-detail', { title: 'Student Detail', student: student  })
}