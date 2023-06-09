import styled, { keyframes } from "styled-components"
import wave from "../../assets/wave.svg"
import stork from "../../assets/stork-baby.png"
import bottle from "../../assets/babby-bottle.png"
import teats from "../../assets/blue-teats.png"

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`

const Teats = styled.div`
  position: absolute;
  bottom: -10rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--blue);
  border-color: var(--blue) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`

const Stork = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`

const Bottle = styled.div`
  width: 150%;
  position: absolute;
  right: 0;
  bottom: 100%;
  transform: scaleX(-1);

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`

const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`

const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Teats>
        <img src={teats} alt="" />
      </Teats>
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Stork>
            <img src={stork} alt="" width="800" height="500" />
          </Stork>
          <AboutText>
            <Bottle>
              <img src={bottle} alt="" width="400" height="400" />
            </Bottle>

            <Text>
             Our team is 
             made up of experienced event planners who specialize in creating 
             beautiful, fun, and personalized baby showers that reflect your 
             unique style and preferences.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--blue)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--white)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
