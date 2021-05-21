import React from 'react';
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { Layout } from '../Components/Sign_in_Components/Layout';
import SignInForms from '../Components/Sign_in_Components/SignInForms';
import { SignInFooterSection } from '../Components/Sign_in_Components/SignInFooter';
import { SignInFooterContent } from '../Components/Sign_in_Components/SignInFooterContent';

const SignIn = () => {
    return (
        <React.Fragment>
                <Layout>
            <NavigationBar>
            </NavigationBar>
                </Layout>
                <Layout>
                <SignInForms>
                </SignInForms>
            </Layout>
            <SignInFooterSection>
                <Layout>
                    <SignInFooterContent>
                    </SignInFooterContent>
                </Layout>
            </SignInFooterSection>
            </React.Fragment>
    )
}

export default SignIn;