import user from './../../data/user.json'
import { Profile } from '../UserProfile/Profile';

function App() {
  return (
    <>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;
