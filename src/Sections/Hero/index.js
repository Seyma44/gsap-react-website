import styled, { keyframes } from "styled-components"
import pinkCloud from "../../assets/pinkcloud.png"
import blueCloud from "../../assets/bluecloud.png"
import whiteCloud from "../../assets/whitecloud.png"
import HeroBaby from "../../assets/hero-blue.png"
import HeroBaby2 from "../../assets/hero-pink.png"

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #fabca77a;
  background: rgb(255,255,255);
  background: linear-gradient(4deg, rgba(255,255,255,1) 35%, rgba(250,188,167,1) 68%);
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`

const Clouds = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`

const PinkCloud = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`

const BlueCloud = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
`

const WhiteCloud = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`

const HeroImg = styled.img`
  max-width: 100%;
  width: calc(30% + 10vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    width: calc(30% + 10vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`

const Title = styled.h1`
  font-size: calc(3rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`

const CTA = styled.button`
  background-color: var(--pink);
  color: #fff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <Clouds>
        <PinkCloud>
          <img src={pinkCloud} alt="" width="400" height="400" />{" "}
        </PinkCloud>
        <WhiteCloud>
          <img src={whiteCloud} alt="" width="400" height="400" />
        </WhiteCloud>
        <BlueCloud>
          <img src={blueCloud} alt="" width="400" height="400" />
        </BlueCloud>
      </Clouds>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Title>Baby Shower</Title>
          <SubText>
            Dream your Baby Shower Party..Let us design it.
          </SubText>
          <CTA>
            Get in touch
          </CTA>
        </Lb>

        <HeroImg 
          src={HeroBaby}
          alt="Hero Baby"
          srcset=""
          width="400"
          height="400"
        />
         <HeroImg
          style={{ animationDirection: "reverse" }}
          src={HeroBaby2}
          alt="Hero Baby"
          srcset=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
