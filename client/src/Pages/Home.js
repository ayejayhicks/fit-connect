import React from 'react';
import { HeroCarousel } from '../Components/HeroCarousel'
import { Layout } from '../Components/Layout';
import { NavigationBar } from '../Components/NavigationBar';
import { Cards } from '../Components/Cards';
import { FirstSection } from '../Components/FirstSection';
import { SecondSection } from '../Components/SecondSection';
import { FooterSection } from '../Components/Footer';
import { FooterContent } from '../Components/FooterContent';

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