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
    <LyricCard lyrics={lyrics}/>
    </>
  );
}
 
export default LyricList;