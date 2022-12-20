import React, { useRef } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from '../utils/contact_option'

import { toast } from 'react-toastify'

export default function Contact() {
	const phoneRef = useRef('');

	// const templateId = 'template_2owk7tg';
	// const serviceId = 'service_4fbj9t8';

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	emailjs.sendForm("SERVICE_D", "TEMPLAE_ID", form.current, "USER_ID").then(
	// 	  (result) => {
	// 		alert("Message Sent Successfully");
	// 		console.log(result.text);
	// 	  },
	// 	  (error) => {
	// 		console.log(error.text);
	// 	  }
	// 	);
	//   };

	const onSubmit = (e) => {
		e.preventDefault();

		// emailjs.sendForm(process.env.REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID, form.current, "USER_ID").then(
		// 	(result) => {
		// 	  alert("Message Sent Successfully");
		// 	  console.log(result.text);
		// 	},
		// 	(error) => {
		// 	  console.log(error.text);
		// 	}
		//   );

		toast.success('Email sent😉');
	}

	return (
	<Container style={{margin: '60px auto', padding: '20px 20px 30px'}}>
			<Row className="mb-5 mt-3">
				<Col lg="8" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0 20px'}}>
					<h1 className="display-4 mb-4">Contact Trainer</h1>
					<h3 className="color_sec py-4" style={{borderLeft: '2px solid #000', padding: '0 10px'}}>Get in touch</h3>
				</Col>
			</Row>
			<hr className="t_border my-4 ml-0 text-left" />
			<Row className="sec_sp">
				<Col lg="5" className="mb-5">
					{/* <h3 className="color_sec py-4">Get in touch</h3> */}
					<address style={{marginTop: '10px'}}>
						{/* <a href={contactConfig.YOUR_EMAIL}> */}
							<strong>Email: {contactConfig.YOUR_EMAIL}</strong>
						{/* </a> */}
						<br />
						<p>
							<strong>Phone: {contactConfig.YOUR_FONE}</strong>
						</p>
					</address>
					<br />
					{/* <p> {contactConfig.description} </p> */}
				</Col>
				<Col lg="7" className="d-flex align-items-center">
					<form  className="contact__form w-100" onSubmit={onSubmit}>
					<Row>
						<Col lg="6" className="form-group" style={{width: '60%', margin: '0 auto'}} >
							<input className="form-control" id="phone" name="phone" placeholder="Phone Number" type="text" required ref={phoneRef}/>
						</Col>
						{/* <Col lg="6" className="form-group" style={{width: '60%', margin: '0 auto'}}>
							<input className="form-control rounded-0" id="email" name="email" placeholder="Email" type="email" required />
						</Col> */}
					</Row>
					<textarea className="form-control" id="message" name="message"
					placeholder="Message"
					rows={5} cols={30} 
					style={{padding: '5px 10px'}}
					required>
					</textarea>
					<br />
					<br />
					<Row>
						<Col lg="12" className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
							<button className="btn ac_btn" type="submit"> Send </button>
						</Col>
					</Row>
				</form>
			</Col>
		</Row>
	</Container>
);
}