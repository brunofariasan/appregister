import React from "react";
import { ContentSection, HeaderSuccess, Body, SpanSuccess } from '../../../src/pages/Success/styles'
import { ButtonSuccess } from '../../Components/Forms/Style.Button'
import logoText from '../../assets/image/TextSuccess.png'
import logo from '../../assets/image/data 1.png'
import { useNavigate  } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();

   function handleClick() {
        navigate('/')
    }
    return (
        <Body>
            <ContentSection>
                <HeaderSuccess>
                    <SpanSuccess>
                        <img src={logo} alt="logo"/>
                    </SpanSuccess>
                    <SpanSuccess>
                        <img src={logoText} alt="title"/>
                    </SpanSuccess>
                    <SpanSuccess> 
                        <ButtonSuccess onClick={handleClick}>
                            Go Back!
                        </ButtonSuccess>
                    </SpanSuccess>
                </HeaderSuccess>
            </ContentSection>
        </Body>
    );
}
  
export default Success;