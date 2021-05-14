import React from 'react';
import { Col } from 'react-bootstrap';
import { NavigationBar } from '../Components/Home_Components/NavigationBar';
import { SignUpLayout } from '../Components/Sign_up_Components/SignUpLayout';
import { SignUpContainer } from '../Components/Sign_up_Components/SignUpContainer';
import { SignUpImg } from '../Components/Sign_up_Components/SignUpImg';
import SignUpForms from '../Components/Sign_up_Components/SignUpForms';
import { SignInFooterSection } from '../Components/Sign_in_Components/SignInFooter';
import { SignInFooterContent } from '../Components/Sign_in_Components/SignInFooterContent';

const SignUp = () => {
    return (
        <React.Fragment>
            {/* Navigation Bar */}
            <SignUpContainer>
                <NavigationBar>
                </NavigationBar>
            </SignUpContainer>

            {/* Forms */}
            <SignUpLayout>
                    <SignUpImg>
                    </SignUpImg>
             
                <SignUpForms>
                </SignUpForms>
         
            </SignUpLayout>

            {/* Footer */}
            <SignInFooterSection>
                <SignUpContainer>
                    <SignInFooterContent>
                    </SignInFooterContent>
                </SignUpContainer>
            </SignInFooterSection>
        </React.Fragment>
    )
}

export default SignUp;