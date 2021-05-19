import React from 'react'

import { NavigationBar } from '../Components/Home_Components/NavigationBar';
import { Layout } from '../Components/Home_Components/Layout';
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';
import { MainCards } from '../Components/Main_Components/MainCards'


const Main = () => {
    return (
        <React.Fragment>
            <Layout>
                <NavigationBar>
                </NavigationBar>

            <Layout>
                    <MainCards>
                    </MainCards>
            </Layout>
            
            </Layout>
            <FooterSection>
                <Layout>
                    <FooterContent>
                    </FooterContent>
                </Layout>
            </FooterSection>

        </React.Fragment>
    )
}

export default Main;