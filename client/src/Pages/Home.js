import React from 'react';
import NavigationBar from '../Components/Home_Components/NavigationBar';
import { HeroCarousel } from '../Components/Home_Components/HeroCarousel'
import { Layout } from '../Components/Home_Components/Layout';
import { Cards } from '../Components/Home_Components/Cards';
import { FirstSection } from '../Components/Home_Components/FirstSection';
import { SecondSection } from '../Components/Home_Components/SecondSection';
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';

export const Home = () => {
  return (
      <React.Fragment>
      {/* Navigation Bar */}
        <Layout>
          <NavigationBar />
        </Layout>

        <HeroCarousel />
        <Layout>
          <Cards />
        </Layout>
        <FirstSection />
        <SecondSection />

      {/* Footer */}
        <FooterSection>
          <Layout>
            <FooterContent />
          </Layout>
        </FooterSection>
      </React.Fragment>
  );
}

export default Home;
