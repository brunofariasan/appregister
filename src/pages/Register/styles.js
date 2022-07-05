import styled from "styled-components"

export const Header = styled.header `
    display: flex;
    margin: 0 auto;
    max-width: 400px;
    flex-direction: column;
`;

export const Span = styled.span `
    flex: 1;
    margin-top: 20px;
    text-align: center;
`;

export const Body = styled.body `
    align-items: center;
    background: #E5E5E5;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 700px) {
    background: #fff;
    }
`;

export const ContentSection = styled.section`
    background: #FFFFFF;
    border-radius: 20px;
    height: 763px;
    position: absolute;
    width: 620px;

    @media (max-width: 700px) {
        height: 100%;
        width: 100%;

        Form{
        width: 100%;
        margin: 0px;
        }
    }
`;

export const Main = styled.main`
    flex-direction: column;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    color: #767676;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
`;

export const FormRegisterInformation = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
    position: absolute;
	width: 85%;
`;
