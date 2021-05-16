import { useState } from 'react'

const CreateArea = ({noteAdder}) => {
    const [ newNote, setNewNote ] = useState({
        title: '',
        data: ''
    })

    const makeChange = (e) => {
        let {name, value} = e.target
        //console.log(value)

        setNewNote( (prevData) => {
            return (
                // return type is set to obj
                {
                    ...prevData,
                    [name]: value
                }
                )
                }
            
         )
    }

    const submitNote = (event) => {
        event.preventDefault();
        noteAdder(newNote)
        setNewNote({
            title: '',
            data: ''
        })
    }

    return (
         <div className='input-div'>
             <form>
                 <input name='title'
                 autoFocus
                 onChange={makeChange}
                 value={newNote.title}
                 placeholder='Title...'/>

                 <textarea name='data'
                 onChange={makeChange}
                 value = {newNote.data}
                 placeholder='Quick note..'
                 rows='3'/>
                 <button className="btn" onClick={submitNote}><i className='fa fa-plus'></i></button>
             </form>
         </div>
    )
}

export default CreateArea