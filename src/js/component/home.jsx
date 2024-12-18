import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Card from "./Card"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const navbarLinks = [
		{ href: '#', text: 'Home' },
		{ href: '#', text: 'About' },
		{ href: '#', text: 'Services' },
		{ href: '#', text: 'Contact' },
	];


	return (
		<>
			<Navbar brand="Dogs" links={navbarLinks} />
			<Jumbotron
				title="This is a Jumbotron"
				description="This is the amazing description of this Jumbotron I've just created using React"
				buttonText="Button"
				buttonUrl="#"
			/>

			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 col-12">
						<Card
							imgUrl="https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge.jpg"
							cardTitle="A french bulldog"
							cardDescription="This is a dog called Ringo. He is a black small french bulldog"
							buttonUrl="#"
							buttonText="Learn More"
						/>
					</div>
					<div className="col-lg-3 col-12">
						<Card
							imgUrl="https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge.jpg"
							cardTitle="A french bulldog"
							cardDescription="This is a dog called Ringo. He is a black small french bulldog"
							buttonUrl="#"
							buttonText="Learn More"
						/>
					</div>
					<div className="col-lg-3 col-12">
						<Card
							imgUrl="https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge.jpg"
							cardTitle="A french bulldog"
							cardDescription="This is a dog called Ringo. He is a black small french bulldog"
							buttonUrl="#"
							buttonText="Learn More"
						/>
					</div>
					<div className="col-lg-3 col-12">
						<Card
							imgUrl="https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge.jpg"
							cardTitle="A french bulldog"
							cardDescription="This is a dog called Ringo. He is a black small french bulldog"
							buttonUrl="#"
							buttonText="Learn More"
						/>
					</div>
				</div>
			</div>
		</>

	);
};

export default Home;
