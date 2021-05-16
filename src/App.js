import { useState } from 'react'
import Footer from './components/Footer'
import './App.css';
import Header from './components/Header'
import CreateArea from './components/CreateArea';
import Note from './components/Note'

function App() {
  const [notebook, setNotebook] = useState([])

  const noteAdder = (newNote) => {
    setNotebook( prevNotes => {
      return [...prevNotes, newNote]
    })
  }
  console.log(notebook)

  const noteDeleter = (id) => {
    console.log(id)
    setNotebook(notebook.filter((note, index) => {return (index!==id ? note : '')}))
  }

  return (
    <div className="App">
      <Header />
      <CreateArea noteAdder={noteAdder}/>
      { notebook.map( (page, index) => {
        return (
          <Note 
          key={index}
          id={index}
          title={page.title}
          data={page.data}
          deleteNote={noteDeleter}/>
        )
      }) }
      <Footer />
    </div>
  );
}

export default App;
