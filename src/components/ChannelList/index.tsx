import React from 'react';
import { Container, Category, ExpandIcon, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <div>
                    <ExpandIcon />

                    <span>Canais de texto</span>
                </div>

                <AddCategoryIcon />
            </Category>

            <ChannelButton selected channelName="chat-livre" channelCategoryType="text" />
            <ChannelButton channelName="trabalho" channelCategoryType="text" />
            <ChannelButton channelName="lolzinho" channelCategoryType="text" />
            <ChannelButton channelName="csgo" channelCategoryType="text" />
            <ChannelButton channelName="valorant" channelCategoryType="text" />

            <Category>
                <div>
                    <ExpandIcon />

                    <span>Canais de voz</span>
                </div>

                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="geral" channelCategoryType="voice" />
            <ChannelButton channelName="bate-papinho" channelCategoryType="voice" />
        </Container>
    );
};

export default ChannelList;
