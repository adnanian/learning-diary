import { useEffect, useState } from 'react';
import './App.css';
import NoteBook from './Notebook';
import Settings from './pages/Settings';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/reflectionQuestions')
    .then((response) => response.json())
    .then((data) => setReflectionQuestions(data));
  }, []);

  const [reflectionQuestions, setReflectionQuestions] = useState([]);

  function addReflectionQuestion(newReflection) {
    setReflectionQuestions([...reflectionQuestions, newReflection]);
    console.log(`Reflection question #${newReflection.id} successfully added to the server!`);
  }

  return (
    //<NoteBook />
    <Settings reflectionQuestions={reflectionQuestions} onAddReflection={addReflectionQuestion} />
  );
}

export default App;
