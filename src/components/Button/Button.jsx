export const Button = ({ onBtnClick, isClicked }) => {
  return (
    <button
      type="button"
      aria-label="following button"
      onClick={() => onBtnClick}
    >
      {isClicked ? 'Following' : 'Follow'}
    </button>
  );
};
