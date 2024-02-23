import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #f3f3f3;
    width: 80vw;
    height: 15vh;
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 2px solid; 
    border-image: linear-gradient(180deg, #F3C63C 0%, #E84E99 100%); 
    border-image-slice: 1; 
    margin: 3rem 2rem;
`
export const Container1 = styled.View`
    justify-content: flex-start;
    padding: 0.1rem 1.2rem 0.1rem 0;
`

export const Image = styled.Image`
    width: 50%;
    height: 5.9rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 1rem;
    margin: 0.3rem 0;
`

export const SubTitle = styled.Text`
    font-size: 1rem;
    font-weight: 650;
`