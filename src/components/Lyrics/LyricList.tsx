import { Lyric, User } from "../../types/models";
import LyricCard from "../LyricCard/banana"


interface LyricProps{
  lyrics: Lyric[];
  user: User | null;
  handleDeleteLyric: (lyric:string) => void;
  handleUpdateLryic: (lyricData:Lyric) => void;
}

const LyricList = (props:LyricProps) => {
  const {lyrics} = props
  return ( 
    
    <>
    {/* <h1 id="lyricListHeader">lyric list:</h1> */}
    <div className="lyricListContainer">
      <LyricCard lyrics={lyrics} user={props.user} handleDeleteLyric={props.handleDeleteLyric} handleUpdateLyric={props.handleUpdateLryic}/>
    </div>
    </>
  );
}
 
export default LyricList;