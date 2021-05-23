import React from 'react';
import { Container, HashtagIcon, MegaphoneIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
    channelCategoryType: string;
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected,
    channelCategoryType
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                {
                    channelCategoryType == 'text' ?
                        <HashtagIcon />
                    : channelCategoryType == 'voice' ?
                        <MegaphoneIcon />
                    : null
                }

                <span>{channelName}</span>
            </div>

            <div className="channel-button-properties">
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    );
};

export default ChannelButton;
