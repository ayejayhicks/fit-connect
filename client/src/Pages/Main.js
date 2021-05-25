import React from 'react'
import { LoggedNavigationBar } from '../Components/Main_Components/LoggedNavigationBar';
import { Layout } from '../Components/Home_Components/Layout';
import { MainCards } from '../Components/Main_Components/MainCards'
import { FooterSection } from '../Components/Home_Components/Footer';
import { FooterContent } from '../Components/Home_Components/FooterContent';

const Main = () => {
  return (
    <React.Fragment>
      <Layout>
        <LoggedNavigationBar />
      </Layout>

      <Layout>
        <MainCards />
      </Layout>

      <FooterSection>
        <Layout>
            <FooterContent />
        </Layout>
      </FooterSection>
    </React.Fragment>
  );
}

export default Main;
