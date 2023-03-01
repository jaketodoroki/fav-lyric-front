import { Lyric, User } from "../../types/models"
import { Link } from "react-router-dom"

interface LyricCardProps{
  lyrics: Lyric[];
  user: User| null;
  handleDeleteLyric: (name:string) => void;
  handleUpdateLyric: (lyricData:Lyric) => void;
}

const LyricCard = (props:LyricCardProps):JSX.Element => {
  const {lyrics} = props
  if(!lyrics.length) return <p>Loading</p>

  return ( 
    <>
    {lyrics.map((lyric) => 
    // <>
      <main key={lyric.id}>

      <div className="lyricCard">
        <p id="lyricName">name:{lyric.name}</p>
        <p id="lyric">lyric:{lyric.lyric}</p>
      {lyric.profileId === props.user?.id &&
      <>
        <div id='button'>
          <button id='delete' onClick={() => props.handleDeleteLyric(lyric.name)}>Delete</button>
        </div>
        <div id="selection">
          <Link to={`/lyrics/${lyric.name}`} state={lyric}>Update Lyric</Link>
        </div>
        </>
      }
      </div>
      </main>
    // </>
    )}
    </>
   );
}
 
export {LyricCard}