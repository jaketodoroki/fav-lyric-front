import React, { ReactEventHandler, useState } from "react";
import { CreateLyricFormData } from "../../types/forms";

interface CreateLyricProps{
  handleCreate: (FormData: CreateLyricFormData) => void
}

const AddLyric = (): JSX.Element => {

  const [form, setForm] = useState<CreateLyricFormData>({
    name: '',
    lyric: '',
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return ( 
    <>
    <main className='addLyric'>
      <h1>Add a Lyric</h1>
      <form>
        <div>
          <label htmlFor="lyric">Lyric:</label>
          <input 
            type="text"
            name='lyric'
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            name='name' 
          />
        </div>
        <button>Create Lyric</button>
      </form>
    </main>
    </>
  );
}
 
export default AddLyric;