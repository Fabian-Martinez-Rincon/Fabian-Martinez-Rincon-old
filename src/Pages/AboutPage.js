import React from 'react'
import styled from 'styled-components';
import {MainLayout} from '../styles/Layauts';
import Title from '../Components/Title';
import ImageSection from '../Components/imageSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'about me'} />
                <ImageSection />
                
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage

/*
<ServicesSection />
*/ 