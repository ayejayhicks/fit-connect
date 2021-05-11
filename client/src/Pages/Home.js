import React from 'react';
import { HeroCarousel } from '../Components/Home_Components/HeroCarousel'
import { Layout } from '../Components/Home_Components/Layout';
import { NavigationBar } from '../Components/Home_Components/NavigationBar';
import { Cards } from '../Components/Home_Components/Cards';
import { FirstSection } from '../Components/Home_Components/FirstSection';
import { SecondSection } from '../Components/Home_Components/SecondSection';
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';

export const Home = () => {
    return (
        <React.Fragment>
            <Layout>
                <NavigationBar />
            </Layout>
            <HeroCarousel />
            <Layout>
                <Cards>
                </Cards>
            </Layout>
            <FirstSection>
            </FirstSection>
            <SecondSection>
            </SecondSection>
            <FooterSection>
                <Layout>
                    <FooterContent>
                    </FooterContent>
                </Layout>
            </FooterSection>
        </React.Fragment>
    );
}

export default Home;