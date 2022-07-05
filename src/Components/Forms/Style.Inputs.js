import styled from "styled-components"

export const Header = styled.header `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
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

        Form {
            width: 100%;
            margin: 0px;
        }
    }
`;

export const Main = styled.main`
    flex-direction: column;
/*     
    p{
    color: red;
    position: absolute;
    margin-top: 0px;
    } */
`;

export const P = styled.p`
    color: red;
    margin-top: 0px;
    position: absolute;
`;

export const Form = styled.form`
    color: #767676;
    display: flex;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    line-height: 21px;
`;

export const FormRegisterInformation = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
    position: absolute;
	width: 85%;
`;

export const Div = styled.div`
    padding: 7% 0 0 0;
    width: 34%;

    @media (max-width: 700px) {
        width: 100%;
        margin: 0px;
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

export const Input = styled.input`
    box-sizing: border-box;
    background: #FFFFFF;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    flex-grow: 1;
    height: 45px; 
    padding: 9px;
    width: 100%;

    /* input:focus,
    input:hover {
        outline: none;
        border-color: #fb1;
        background: white;
        box-shadow: 0 0 0 3px #fea;
    } */
`;

export const DivPersonalized = styled.div`
    padding: 7% 0 0 0;
    width: 330px;

    @media (max-width: 700px) {
        width: 100%;
        margin: 0px;
    }
`;

export const ButtonRegister = styled.button`
    background: #0DBDBD;
    border: 0px solid gray;
    border-radius: 10px;
    color: #FFFFFF;
    float: right;
    height: 40px;
    padding: 0px 12px;
    width: 81px;
`;

export const CheckboxTitle = styled.div`
    font-size: 16px;
    text-shadow: 0.1em 0.1em 0.1em #c6c6c6;
`;

export const DivCheckbox = styled.div`

    width: 100%;
    max-width: 584px;
    margin: 20px auto;

    input:checked + :before {
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
        background-color: #0DBDBD;
        background-position: center;
        border: none;
        padding: 1px;
    }

    input + :before {
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 4px;
        background-color: white;
        border: 1px solid gray;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
        margin-bottom: 3px;
    }

    input{
        display: none;
    }
    //Style button
    #button-register {
        @media (max-width: 700px) {
            //padding: 0px 12px;
            height: 57px;
            margin: 37px auto;
            width: 100%;
            
        }
    }
    @media (max-width: 700px) {
        margin: 0px;
    }
`;

export const DivBox = styled.div`
    width: 527px;
    max-width: 100%;
    margin: 82px auto;

   

    @media (max-width: 700px) {
        margin: 35px 0 0;
        width: 100%;
    }
`;