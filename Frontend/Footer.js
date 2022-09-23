import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white", 
	             fontSize:"30px",
				  top:"40px",
	              position:"relative",
                   textAlign: "center", 
                   marginTop: "-50px"}}>
		ABC COMPANY PVT.LTD
        
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Links</Heading>
			<FooterLink href="http://localhost:3000/Services">Services</FooterLink>
			<FooterLink href="http://localhost:3000/FAQ">FAQ</FooterLink>
			<FooterLink href="http://localhost:3000/OurTeam">Our Team</FooterLink>
			<FooterLink href="http://localhost:3000/Contact">Contact Us</FooterLink>
		</Column>
		
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="mailto:aravindttt@gmail.com">Email : aravindttt@gmail.com</FooterLink>
			<FooterLink href="tel:9876543210">Phone no: 9876543210 </FooterLink>
			<FooterLink href="#"> Address: {" "}New No.52,Old No.110,<br/>KamarajAvenue 3rd Street,<br/>Adayar,Chennai,<br/> tamilnadu-600020 </FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
    <h2 style={{ color: "white", 
                   textAlign: "center", 
                   
				   position:"relative"                }}>Copyright © 2017-2022. All Rights Reserved By ABC</h2>
	</Box>
);
};
export default Footer;
