import { Lyric, User } from "../../types/models"

interface LyricCardProps{
  lyrics: Lyric[];
  user: User| null;
  handleDeleteLyric: (name:string) => void
}

const LyricCard = (props:LyricCardProps):JSX.Element => {
  const {lyrics} = props
  if(!lyrics.length) return <p>Loading</p>
  return ( 
    <>
    {lyrics.map((lyric) => 
    <>
      <div className="lyricCard" key={lyric.name}>
        <p id="lyricName">name:{lyric.name}</p>
        <p id="lyric">lyric:{lyric.lyric}</p>
      {lyric.profileId === props.user?.id &&
        <div id='button'>
          <button id='delete' onClick={() => props.handleDeleteLyric(lyric.name)}>Delete</button>
        </div>
      }
      </div>
      {/* <div className="lyric"key={lyric.lyric}> */}
      {/* </div> */}
    </>
    )}
    </>
   );
}
 
export default LyricCard;