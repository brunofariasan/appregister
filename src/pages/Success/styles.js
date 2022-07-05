import styled from "styled-components"

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

export const FullWidth = styled.div`
    align-self:stretch;
	flex-basis: 100%;
    padding: 7% 0 0 0;

    @media (max-width: 700px) {
    width: 100%;
    margin: 0px;
}
`;

export const MainSuccess = styled.main`
    display: flex;
    margin: 112px auto;
    max-width: 423px;
    flex-direction: column;
`;

export const ContentSuccess = styled.div`
    display: flex;
    margin: 112px auto;
    max-width: 423px;  
`;

export const HeaderSuccess = styled.header `
    display: flex;
    margin: 112px auto;
    max-width: 400px;
    flex-direction: column;

`;

export const SpanSuccess = styled.span `
    flex: 1;
    font-size: 1.5em;
    margin-top: 20px;
    margin: 0px 0 38px 0px;
    padding: 0 5px;
    text-align: center;  
`;
