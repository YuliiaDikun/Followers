import css from './User.module.css';
import logo from '../../img/Logo.svg'

export const User = (props) => {
  const { user, tweets, followers, avatar, isFollow, onToggleProp } = props;
  const followersUI = isFollow ? 100501 : followers;

  const correctFollowers =
    String(followersUI).slice(0, 3) + ',' + String(followersUI).slice(3);
  return (
    <li className={css.Card}>
      <div className={css.Logo}>
        <img src={logo} alt="goIT academy logo" />
      </div>
      <div className={css.User}>
        <span className={css.Line}></span>
        <div className={css.Userpic}>
          <img src={avatar} alt={user} className={css.UserSvg} />
        </div>
        <p className={css.Media}>{user}</p>
        <p className={css.Media}>{tweets} tweets</p>
        <p className={css.Media}>{correctFollowers} followers</p>
        <button
          className={isFollow ? css.Active : css.Button}
          type="button"
          aria-label="following button"
          onClick={onToggleProp}
          data-follow='isFollow'
        >
          {isFollow ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};
