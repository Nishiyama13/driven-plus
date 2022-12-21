import { createGlobalStyle } from "styled-components";
import { backgroundColor } from "../constants/colors";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
    line-height: 1;
    background:${backgroundColor};
    font-family: 'Roboto', sans-serif;
    padding-top:135px;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

	input {
	background: #FFFFFF;
	border: 1px solid #D5D5D5;

	height: 45px;
	width: 300px;
	border-radius: 5px;
	
	margin-bottom: 6px;
	margin-top: 10px;
	

	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	font-weight: 400;
	line-height: 25px;
	letter-spacing: 0em;
	text-align: left;

	display: flex;
	align-items: center;
	&::placeholder{
		font-style: italic;
    }
}
`;

export default GlobalStyle;