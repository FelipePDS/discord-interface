import React from 'react';
import { 
    Container, 
    Avatar, 
    Message, 
    Header, 
    Content,
    MessageOptions, 
    EmoijIcon, 
    ShareIcon, 
    MoreIcon, 
} from './styles';

export { Mention } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot
}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''} />

            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>

                <Content>{content}</Content>
            </Message>

            <MessageOptions className="message-options">
                <EmoijIcon />
                <ShareIcon />
                <MoreIcon />
            </MessageOptions>
        </Container>
    );
};

export default ChannelMessage;
