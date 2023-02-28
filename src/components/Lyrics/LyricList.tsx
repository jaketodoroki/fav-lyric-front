import { Lyric, User } from "../../types/models";
import LyricCard from "../LyricCard/LyricCard"


interface LyricProps{
  lyrics: Lyric[];
  user: User | null;
  handleDeleteLyric: (lyric:string) => void
}

const LyricList = (props:LyricProps) => {
  const {lyrics} = props
  return ( 
    <>
    <h1>lyric list:</h1>
    <div className="lyricListContainer">
      <LyricCard lyrics={lyrics} user={props.user} handleDeleteLyric={props.handleDeleteLyric}/>
    </div>
    </>
  );
}
 
export default LyricList;