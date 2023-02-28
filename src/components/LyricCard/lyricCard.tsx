import { Lyric, User } from "../../types/models"

interface LyricCardProps{
  lyrics: Lyric[],
  // user: User| null;
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
      </div>
      {/* <div className="lyric"key={lyric.lyric}> */}
      {/* </div> */}
    </>
    )}
    </>
   );
}
 
export default LyricCard;