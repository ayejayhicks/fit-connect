import React from 'react';
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { Layout } from '../Components/Sign_in_Components/Layout';
import SignInForms from '../Components/Sign_in_Components/SignInForms';
import { SignInFooterSection } from '../Components/Sign_in_Components/SignInFooter';
import { SignInFooterContent } from '../Components/Sign_in_Components/SignInFooterContent';

const SignIn = () => {
  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <Layout>
        <NavigationBar />
      </Layout>

      <Layout>
        <SignInForms />
      </Layout>

      {/* Footer */}
      <SignInFooterSection>
        <Layout>
            <SignInFooterContent />
        </Layout>
      </SignInFooterSection>
    </React.Fragment>
  )
}

export default SignIn;
