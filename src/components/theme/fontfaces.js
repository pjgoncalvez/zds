import { createGlobalStyle } from "styled-components";

import PoppinsRegular from "./fonts/Poppins-Regular.ttf";
import FiraCodeRegular from "./fonts/FiraCode-Regular.ttf";
import RobotoRegular from "./fonts/Roboto-Regular.ttf";

import OpenSansRegular from "./fonts/OpenSans-Regular.ttf";
import OpenSansLight from "./fonts/OpenSans-Light.ttf";
import OpenSansSemiBold from "./fonts/OpenSans-SemiBold.ttf";
import OpenSansBold from "./fonts/OpenSans-Bold.ttf";

export default createGlobalStyle`
        @font-face {
            font-family: 'OpenSans-Regular';
            src: url(${OpenSansRegular}) format('ttf');
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'OpenSans-Bold';
            src: url(${OpenSansBold}) format('ttf');
            font-weight: 800;
            font-style: normal;
        }

        @font-face {
            font-family: 'OpenSans-SemiBold';
            src: url(${OpenSansSemiBold}) format('ttf');
            font-weight: 600;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url(${PoppinsRegular}) format('ttf');
            font-weight: 300;
            font-style: normal;
        }

        @font-face {
            font-family: 'Fira';
            src: url(${FiraCodeRegular}) format('ttf');
            font-weight: 300;
            font-style: normal;
        }

        @font-face {
            font-family: 'Roboto';
            src: url(${RobotoRegular}) format('ttf');
            font-weight: 300;
            font-style: normal;
        }

    body, *{
        font-family: 'OpenSans-Regular';
    }

    a,p,h1,h2,h3,h4,h5{
        font-family: 'Roboto';
    }
`;
