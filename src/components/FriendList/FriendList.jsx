import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((fr) => {
        return (
          <li key={fr.id} className={css.item}>
            {fr.isOnline ? (
              <span className={`${css.status} ${css.online}`}></span>
            ) : (
              <span className={`${css.status} ${css.offline}`}></span>
            )}
            <img
              className={css.avatar}
              src={fr.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{fr.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
