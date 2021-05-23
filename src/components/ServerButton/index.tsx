import React from 'react';

import logo from '../../assets/images/logo.svg';

import { Button, AddIcon, ExploreIcon, DownloadIcon } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    isAddButton?: boolean;
    isExploreButton?: boolean;
    isDownloadButton?: boolean;
};

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    isAddButton,
    isExploreButton,
    isDownloadButton
}) => {
    return (
        <Button
            className={selected ? 'active' : ''}
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            isAddButton={isAddButton}
            isExploreButton={isExploreButton}
            isDownloadButton={isDownloadButton}
        >
            {
                isHome ? 
                    <img src={logo} alt="Rocketseat" />
                : isAddButton ?
                    <AddIcon />
                : isExploreButton ?
                    <ExploreIcon />
                : isDownloadButton ?
                    <DownloadIcon />
                : null
            }
            
        </Button>
    );
};

export default ServerButton;
