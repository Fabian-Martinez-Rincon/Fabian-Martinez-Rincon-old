import React from 'react'
import styled from 'styled-components';
import resume from '../img/foto1.jpg';
import PrimaryButton from './PrimaButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Fabian Martinez</span></h4>
                <p className="paragraph">
                Hello, my name is Fabian, I am an electronic technician and currently a computer engineering student at UNLP Argentina. My current research interests are focused on website development and machine learning. Here is my complete resume and you can contact me by sending an email to fabianmartinezrincon.123@gmail.com.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Fabian Martinez</p>
                        <p>: 21</p>
                        <p>: Ar gentina </p>
                        <p>: Spanish, English </p>
                        <p>: Buenos Aires, La Plata</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Resume'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;