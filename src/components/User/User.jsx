import userpic from '../../img/Hansel.png';
export const User = ({ followers }) => { 
    const correctFollowers = String(followers).slice(0, 2) + ',' + String(followers).slice(3);
    console.log(correctFollowers);
    return (
        <div>
            <img src={ userpic} alt='user pic' />
            <p>777 tweets</p>
            <p>followers</p>
        </div>
    )
}