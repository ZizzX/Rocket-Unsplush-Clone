import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
`

export {Flex}