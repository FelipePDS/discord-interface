import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome selected />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={31}/>
            <ServerButton />

            <ServerButton isAddButton />
            <ServerButton isExploreButton />

            <Separator />

            <ServerButton isDownloadButton />
        </Container>
    );
};

export default ServerList;
