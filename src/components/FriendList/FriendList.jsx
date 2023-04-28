import css from "./FriendList.module.css";
import PropTypes from 'prop-types';

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  )
}
