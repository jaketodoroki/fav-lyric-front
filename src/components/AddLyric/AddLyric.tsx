import React, { ReactEventHandler, useState } from "react";
import { CreateLyricFormData } from "../../types/forms";

interface CreateLyricProps{
  handleAddLyric: (FormData: CreateLyricFormData) => void
}

const AddLyric = (props:CreateLyricProps): JSX.Element => {

  const [form, setForm] = useState<CreateLyricFormData>({
    name: '',
    lyric: '',
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event:React.MouseEvent<HTMLFormElement>):void => {
    event.preventDefault()
    props.handleAddLyric(form)
  }

  
  return ( 
    <>
    <main className='addLyric'>
      <h1>Add a Lyric</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lyric">Lyric:</label>
          <input
          onChange={handleChange} 
            type="text"
            name='lyric'
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          onChange={handleChange} 
            type="text"
            name='name' 
          />
        </div>
        <button type="submit">Create Lyric</button>
      </form>
    </main>
    </>
  );
}
 
export default AddLyric;