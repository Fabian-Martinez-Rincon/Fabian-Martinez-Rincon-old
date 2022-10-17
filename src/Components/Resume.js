import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layauts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Practices'}
                        subTitle={'Albert Thomas'}
                        text={'During the internship we learned the use and functions of the tools and modules provided by Arduino and how to take advantage of them throughout our projects. We are going to make a keypad in which, by means of two keys, it allows us to go up and down in an alphabet and to be able to choose letter by letter until we send a phrase by bluetooh to our receiver that is in the place desired by the user. '  } 
                        link={"https://drive.google.com/file/d/1Tty9Ge4vC2LeI_gsncEiXDlWJ4HcQx84/view?usp=sharing"}
                    />
                  
                </div>
                


                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - Present'} 
                        title={'Computer Science Degree'}
                        subTitle={'UNLP Informatica'}
                        text={'The profile of the graduate is that of a professional with solid theoretical foundations in Computer Science and an approach oriented to the use of computer technology in aspects such as: networks, distributed systems, processor architecture and operating systems, advanced studies in algorithms and your applications. The training also allows participation in Research, Development and Innovation activities within the discipline. '} 
                        link={'https://www.info.unlp.edu.ar/carreras-de-grado-lic-en-informatica/'}
                    />
                    <ResumeItem 
                        year={'2014 - 2020'} 
                        title={'Tecnico en Electronica'}
                        subTitle={'Albert Thomas'}
                        text={'In this period of time we focus on learning programming languages such as C, Python, Assembly and Visual Basic. Also the design and assembly of printed circuits. And various projects on Arduino.'} 
                        link={'https://drive.google.com/file/d/1MSO9HWIgASFo074WhQ75-qYPkP1faJSX/view?usp=sharing'
                        }
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume