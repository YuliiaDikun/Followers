import { Logo } from 'components/Logo/Logo';
import { User } from 'components/User/User';
import { Button } from 'components/Button/Button';
export const Card = ({onBtnClick, isClicked, followers }) => { 
    return (
        <div>
            <Logo />
            <User followers={followers } />
            <Button onBtnClick={onBtnClick} isClicked={isClicked } />
        </div>
    )
}