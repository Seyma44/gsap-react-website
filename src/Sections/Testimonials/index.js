import React, { lazy } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
  background: rgb(250,188,167);
  background: linear-gradient(0deg, rgba(250,188,167,0.0214679621848739) 15%, rgba(250,188,167,1) 68%);
`

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--blue);
  }
`

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #fff;
    font-size: 2.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #fff;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="The decorations were absolutely beautiful, 
            and the attention to detail was impressive. 
            The team really went above and beyond to make sure that everything was perfect."
            name="Seyma Sa"
          />

          <Card
            text="They helped us select the perfect venue, design stunning invitations, 
            and even provided a variety of games and activities that everyone enjoyed"
            name="Suzan Pure"
          />

          <Card
            text="Overall, I would highly recommend this baby shower shop to 
            anyone looking for a stress-free and enjoyable planning experience. "
            name="Jo Ruler"
          />

          <Card
            text="The team's professionalism, creativity, and attention to detail truly exceeded 
            our expectations and made for a memorable baby shower that everyone is still talking about. "
            name="Zeylin Xan"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
