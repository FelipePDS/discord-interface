import React from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage 
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Hoje é meu aniversário"
                />

                <ChannelMessage 
                    author="Diego Fernandes"
                    date="21/06/2021"
                    content={
                        <>
                            <Mention>@Guilherme Rodz</Mention>, me carrega no Lol e CS de novo por favor?
                        </>
                    }
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
