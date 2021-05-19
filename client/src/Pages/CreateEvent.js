import React from 'react';
import { NavigationBar } from '../Components/Home_Components/NavigationBar';
import { SignInFooterSection } from '../Components/Sign_in_Components/SignInFooter';
import { SignInFooterContent } from '../Components/Sign_in_Components/SignInFooterContent';
import  CreateEventForm from '../Components/Create_Event_Components/CreateEventForm'
import { Layout } from '../Components/Home_Components/Layout'


const CreateEvent = () => {
    return (
        <React.Fragment>
            {/* Navigation Bar */}

                <NavigationBar>
                </NavigationBar>
            <Layout>
            <CreateEventForm>

            </CreateEventForm>
            </Layout>

            {/* Footer */}
            <SignInFooterSection>
                <Layout>
                    <SignInFooterContent>
                    </SignInFooterContent>
                </Layout>
            </SignInFooterSection>
        </React.Fragment>
    )
}

export default CreateEvent;