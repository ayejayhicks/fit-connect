import React from 'react';
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';
import  CreateEventForm from '../Components/Create_Event_Components/CreateEventForm'
import { Layout } from '../Components/Home_Components/Layout'


const CreateEvent = () => {
    return (
        <React.Fragment>
            {/* Navigation Bar */}
            <Layout>
                <NavigationBar/>
            </Layout>
            <Layout>
            <CreateEventForm>

            </CreateEventForm>
            </Layout>

            {/* Footer */}
            <FooterSection>
                <Layout>
                    <FooterContent>
                    </FooterContent>
                </Layout>
            </FooterSection>
        </React.Fragment>
    )
}

export default CreateEvent;