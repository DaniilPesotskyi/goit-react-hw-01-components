import user from './../../data/user.json';
import data from './../../data/data.json';
import friends from './../../data/friends.json';
import transactions from './../../data/transactions.json';
import { Profile } from '../UserProfile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

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
      <Statistics 
        title="Upload stats"
        data={data}
      />
      <FriendList 
        friends={friends}
      />
      <TransactionHistory 
        items={transactions}
      />
    </>
  );
}

export default App;
