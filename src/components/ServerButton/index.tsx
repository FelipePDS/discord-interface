import React from 'react';

import logo from '../../assets/images/logo.svg';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
};

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            className={selected ? 'active' : ''}
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
        >
            {isHome && <img src={logo} alt="Rocketseat" />}
        </Button>
    );
};

export default ServerButton;
