import css from './User.module.css';
import userpic from '../../img/Hansel.svg';
export const User = ({ isClicked, onBtnClick }) => {
   
  const followers = isClicked ? 100501 : 100500;
  const correctFollowers =
    String(followers).slice(0, 3) + ',' + String(followers).slice(3);
  return (
    <div className={css.User}>
      <span className={css.Line}></span>
      <div className={css.Userpic}>
        <img  src={userpic} alt="user pic" className={css.UserSvg}/>
      </div>
      <p className={css.Media}>777 tweets</p>
      <p  className={css.Media}>{correctFollowers} followers</p>
      <button
      className={isClicked ? css.Active : css.Button}
        type="button"
        aria-label="following button"
        onClick={() => onBtnClick()}
      >
        {isClicked ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};
