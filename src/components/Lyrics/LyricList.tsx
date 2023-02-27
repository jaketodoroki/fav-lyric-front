import { Lyric } from "../../types/models";

interface LyricProps{
  lyrics: Lyric[]
}

const LyricList = (props:LyricProps) => {
  return ( 
    <h1>lyric list:</h1>
  );
}
 
export default LyricList;