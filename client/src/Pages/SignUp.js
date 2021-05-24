import React from 'react';
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { SignUpLayout } from '../Components/Sign_up_Components/SignUpLayout';
import { SignUpContainer } from '../Components/Sign_up_Components/SignUpContainer';
import { SignUpImg } from '../Components/Sign_up_Components/SignUpImg';
import SignUpForms from '../Components/Sign_up_Components/SignUpForms';
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';
//
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
            <FooterSection>
                <SignUpContainer>
                    <FooterContent>
                    </FooterContent>
                </SignUpContainer>
            </FooterSection>
        </React.Fragment>
    )
}

export default SignUp;