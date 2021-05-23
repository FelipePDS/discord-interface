import styled from 'styled-components';

import { Props } from '.';

import { Add } from 'styled-icons/fluentui-system-filled';
import { Explore } from 'styled-icons/material';
import { DownloadOutline } from 'styled-icons/evaicons-outline';

export const Button = styled.button<Props>`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 48px;
    height: 48px;
    margin-bottom: 8px;

    background-color: ${(props) => 
        props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    cursor: pointer;

    border-radius: 50%;

    transition: border-radius .2s, background-color .2s;

    > img, svg {
        width: 24px;
        height: 24px;
    }

    &::before {
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        display: ${props => props.hasNotifications ? 'inline' : 'none'};

        width: 9px;
        height: 9px;
        
        background-color: var(--white);

        border-radius: 50%;

        content: '';
    }

    &::after {
        position: absolute;
        bottom: -4px;
        right: -4px;

        display: ${props => props.mentions ? 'inline' : 'none'};

        width: auto;
        height: 16px;

        padding: 0 4px;

        background-color: var(--notification);

        border: 4px solid var(--quaternary);
        border-radius: 12px;

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content: '${props => props.mentions && props.mentions}';
    }

    > svg {
        color: ${
            props => (props.isAddButton || props.isExploreButton || props.isDownloadButton) 
                && 'var(--discord-green)'
        };
    }

    &.active, &:hover {
        border-radius: 16px;
        background-color: ${
            props => props.isHome ? 
                'var(--rocketseat)' 
            : (props.isAddButton || props.isExploreButton || props.isDownloadButton) ? 
                'var(--discord-green)'
            : 'var(--discord)'
        };

        > svg {
            color: var(--white);
        }
    }
`;

export const AddIcon = styled(Add)`
    
`;

export const ExploreIcon = styled(Explore)`
    
`;

export const DownloadIcon = styled(DownloadOutline)`
    
`;
