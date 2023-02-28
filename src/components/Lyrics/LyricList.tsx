import { Lyric } from "../../types/models";
import LyricCard from "../LyricCard/LyricCard"


interface LyricProps{
  lyrics: Lyric[]
}

const LyricList = (props:LyricProps) => {
  const {lyrics} = props
  return ( 
    <>
    <h1>lyric list:</h1>
    <div className="lyricListContainer">
      <LyricCard lyrics={lyrics}/>
    </div>
    </>
  );
}
 
export default LyricList;