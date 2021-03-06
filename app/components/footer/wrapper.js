import styled from 'styled-components';

const Wrapper = styled.footer`
	overflow: hidden;
  	padding-top: 20px;
  	border-top: 1px #000 solid;
  	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,e5e5e5+100;White+3D */
	background: rgb(255,255,255); /* Old browsers */
	background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0 ); /* IE6-9 */
`;

export default Wrapper;