import { Lyric } from "../../types/models";
import LyricCard from "../LyricCard/LyricCard"


interface LyricProps{
  lyrics: Lyric[]
}

const LyricList = (props:LyricProps) => {
  return ( 
    <>
    <h1>lyric list:</h1>
    <LyricCard />
    </>
  );
}
 
export default LyricList;