import { Lyric, User } from "../../types/models";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { UpdateLyricFormData } from "../../types/forms";

interface UpdateLyricProps {
  handleUpdateLyric: (lyricData:Lyric) => void;
}

const UpdateLyric = (props:UpdateLyricProps) => {
  const { state } = useLocation()
  const [form, setForm] =useState(state)

  const handleChange = ({ target } :React.ChangeEvent<HTMLInputElement>):void => {
    setForm({ ...form, [target.name]: target.value})
  }

  const handleSubmit = (e:React.MouseEvent<HTMLFormElement>):void => {
    e.preventDefault()
    props.handleUpdateLyric(form)
  }

  return ( 
    <>
    <main className='addLyric'>
      <h1>Update Lyric</h1>
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
        <button type="submit">Update</button>
      </form>
    </main>
    </>
   );
}
 
export default UpdateLyric;