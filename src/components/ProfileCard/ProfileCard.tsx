// assets
import defaultPic from '../../assets/icons/profile.png'

// type
import { Profile } from '../../types/models'

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {

  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return ( 
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>
      {/* <h2>{profile.l}</h2> */}
    </article>
  );
}
 
export default ProfileCard;