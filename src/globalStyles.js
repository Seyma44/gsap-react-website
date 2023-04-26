import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Rubik+Vinyl&display=swap');
:root{
   --background: #fabca77a;
   --black:#0a0b10;
   --blue:#ade3fc;
   --pink:#f8c2d8;
   --white:#fff;
   --nav:#fabca7;
   --nav2:#393939;
}

*,*::before,*::after{
   margin:0;
   padding:0;
   box-sizing:border-box;
   font-family: 'Chelsea Market', cursive;
}

html{
  ${""}
  scroll-behavior:smooth;
}
    body,
    html,
    a {
        font-family: 'Rubik Vinyl', cursive;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3{
        margin:0;
        padding:0;
        font-family: 'Rubik Vinyl', cursive;
    }
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`

//  /* Colors */
