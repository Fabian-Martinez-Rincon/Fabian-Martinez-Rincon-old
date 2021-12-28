import Particle from '../Components/Particle';
import React from 'react'
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';


function HomePage() {
    return (
        <HomePageStyled>
            <div className="Margen">

                    <Particle />

                
            </div>

            <div className="typography">
                
                <h1>Hi, I'm <span>Fabian Martinez</span></h1>
                <p>
                Full Stack Developer
                </p>
                <div className="icons">
                    <a href="https://www.instagram.com/fabianm__11/" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://github.com/Fabian-Martinez1" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/fabi%C3%A1n-martinez-rincon-03b458200/" className="icon i-linkedin">
                        <LinkedinIcon />
                    </a>
                    
                </div>
                
            </div>
            
        </HomePageStyled>
        
    )
}



const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    
    .Margen{
        width: 100%;
        height: 100vh;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        
        

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid #00BCFF;
                    color: #00BCFF;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-instagram{
                &:hover{
                    border: 2px solid #FF5E00;
                    color: #FF5E00;
                }
            }
        }
    }
`;

export default HomePage;