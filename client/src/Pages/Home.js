import React, { Component } from 'react';
import { HeroCarousel } from '../Components/HeroCarousel'
import { Layout } from '../Components/Layout';
import { NavigationBar } from '../Components/NavigationBar';
import { Cards } from '../Components/Cards'

export const Home = () => {
    return (
        <React.Fragment>
            <NavigationBar />
                <HeroCarousel />
            <Layout>
                <Cards>
                </Cards>
            </Layout>
        </React.Fragment>
    );
}

export default Home;