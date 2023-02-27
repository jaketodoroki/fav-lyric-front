const AddLyric = () => {
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