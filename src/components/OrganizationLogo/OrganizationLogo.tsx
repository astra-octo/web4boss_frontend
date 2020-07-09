import React, {ReactNode} from "react";
import {Organization} from "../../store/states/types";

import './OrganizationLogo.scss';
import Title from "antd/es/typography/Title";

interface IOrganizationLogoProps {
    organization: Organization;
    children?: ReactNode;
}

function OrganizationLogo({organization}: IOrganizationLogoProps): JSX.Element {
    return (
        <div className={'organization-logo'}>
            <img src={organization.logo_url || '/logo.png'} alt={organization.name}/>
            <Title level={4}>{organization.name}</Title>
        </div>
    );
}

export default OrganizationLogo;
