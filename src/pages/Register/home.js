import React from "react";
import { Header, Body, ContentSection, Main, Form, FormRegisterInformation, Span } from './styles'
import { Div, FullWidth, Input, DivPersonalized, DivCheckbox, DivBox, CheckboxTitle, P } from '../../Components/Forms/Style.Inputs'
import logoText from '../../assets/image/Text.png'
import logo from '../../assets/image/data 1.png'
import { ButtonRegister } from '../../Components/Forms/Style.Button'
import useForm from "../../assets/hooks/useForm";
import Inputs from "../../Components/Forms/Inputs";
import { useNavigate  } from 'react-router-dom';


const Home = () => {

  const username = useForm('username');
  const email = useForm('email');
  const phone = useForm('phone');
  const password = useForm('password');
  const birthday = useForm('birthday');
  const checkbox = useForm('checkbox');

  //const che = (document.getElementById('terms').checked);
  
  const navigate = useNavigate();
  
  function handleSubmit() {

    if(username.validate() && email.validate() && password.validate() && 
      birthday.validate() && (document.getElementById('terms').checked)){
      //console.log('login')
      navigate('success')
    }if(!(document.getElementById('terms').checked)){
        console.log('Checkbox desmarcado')
    }
   
  }

  return (
    <Body>
      <ContentSection>
        <Header>
          <Span>
            <img src={logo} alt="logo"/>
          </Span>
          <Span>
            <img src={logoText} alt="title"/>
          </Span>
        </Header>
        <Main>
          <Form >
            <FormRegisterInformation>
              <FullWidth>
                <Inputs  label="Full Name *" type="email" name="username" {...username}/>
              </FullWidth>
              <DivPersonalized >
                <Inputs label="E-mail *" type="email" name="email" {...email}/>
              </DivPersonalized>
              <Div>
                <Inputs label="Phone" type="phone" name="phone" {...phone}/>
              </Div>
              <DivPersonalized>
                <Inputs label="Password *" type="password" name="password" {...password}/>
              </DivPersonalized>
              <Div>
                <Inputs label="Birthday *" type="date" name="birthday" {...birthday}/>
              </Div>
              <DivCheckbox>
                <DivBox >
                  <CheckboxTitle>
                    <Input name="terms" type="checkbox" id="terms" {...checkbox}/>
                    <label htmlFor="terms">I accept the terms and privacy</label>
                    <ButtonRegister onClick={handleSubmit} id="button-register">
                        Register
                    </ButtonRegister>
                  </CheckboxTitle>
                </DivBox>
              </DivCheckbox>
            </FormRegisterInformation>
          </Form>
        </Main>
      </ContentSection>
    </Body>
  );
}
  
export default Home;