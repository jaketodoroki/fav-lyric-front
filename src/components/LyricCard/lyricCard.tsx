import { Lyric } from "../../types/models"

interface LyricCardProps{
  lyrics: Lyric[],
}

const LyricCard = (props:LyricCardProps):JSX.Element => {
  const {lyrics} = props
  if(!lyrics.length) return <p>Loading</p>
  return ( 
    <>
    {lyrics.map((lyric) => 
    <>
      <p>name:{lyric.name}</p>
      <p>lyric:{lyric.lyric}</p>
    </>
    )}
    </>
   );
}
 
export default LyricCard;