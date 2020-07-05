import React from "react";
import './SocialButton.scss';

enum AllowSocialTypes {
    VK='vk',
    Google='google',
    Facebook='facebook',
    Twitter='twitter',
}

interface ISocialButtonProps {
    type: AllowSocialTypes;
}

function SocialButton(props: ISocialButtonProps): JSX.Element {
    return (
        <div className={`social-button social-button__${props.type}`}>
            {props.type}
        </div>
    );
}

export default SocialButton;
