import React from 'react'
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { Layout } from '../Components/Home_Components/Layout';
import { MainCards } from '../Components/Main_Components/MainCards'
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';

const Main = () => {
    return (
        <React.Fragment>
            <Layout>
                <NavigationBar />
            </Layout>
            
            <Layout>
                <MainCards>
                </MainCards>
            </Layout>

            <FooterSection>
                <Layout>
                    <FooterContent>
                    </FooterContent>
                </Layout>
            </FooterSection>
        </React.Fragment>
    );
}

export default Main;