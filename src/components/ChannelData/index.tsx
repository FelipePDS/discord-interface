import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { 
    Container, 
    Messages, 
    InputWrapper, 
    Input, 
    InputIcon 
} from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <>
                        <ChannelMessage 
                            key={n}
                            author="Guilherme Rodz"
                            date="21/06/2021"
                            content="Hoje é meu aniversário"
                        />

                        <ChannelMessage 
                            key={n}
                            author="FelipePDS"
                            date="21/06/2021"
                            content="Parabéns!!!"
                        />

                    </>
                ))}

                <ChannelMessage 
                    author="Diego Fernandes"
                    date="21/06/2021"
                    hasMention
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
