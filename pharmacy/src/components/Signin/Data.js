import React, {useEffect, useState} from 'react'
import { FormContent, FormLabel } from './SigninElements'
import {Container,FormWrap, Icon, FormButton,Text,FormH1,Form,FormInput} from './SigninElements';
import { login } from '../../actions/Authentication.js';
import {useMutation} from 'react-query';
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import AdminSignin from "../AdminSignin/index";
export const SignIn = () => {


    // const validEmailRegex = RegExp(
    //     /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    //   );


    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {setEmail(e.target.value)} 


    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {setPassword(e.target.value)} 
    const loginResource = useMutation((data) => login({...data}))


    // const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false);
    const handleSubmit = (event) => {
        
        if (email.length > 0 && password.length > 0) {
            event.preventDefault();
        }
        
        setSubmit(true);
        console.log("Button was Pressed")
        // dispatch(login({email, password}));
        loginResource.mutate({email, password});
        
        if(loginResource.isSuccess && !loginResource.isError) window.location.reload();
    }


    if(loginResource.isSuccess && !loginResource.isError)
    window.location.reload();

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Your Pharmacy</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Log in to your account.</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput 
                                type='email '
                                onChange={handleEmailChange} 
                                value={email} required
                            />

                            <FormLabel htmlFor='for' >Password</FormLabel>
                            <FormInput
                                type='password'
                                onChange={handlePasswordChange}
                                value={password}
                                required
                            />


                            <FormButton onClick={handleSubmit}>Login</FormButton>
                            <Text>Not Registered? 
                                <Link to="/signup" style= {{cursor:'pointer', color:'green'}}>Click Here</Link></Text>
                               
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
