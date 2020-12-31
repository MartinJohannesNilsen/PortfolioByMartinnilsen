import React, { useEffect, useState } from "react";
import "../Styles/Homepage.scss";
import AboutCard from "../Components/AboutCard/AboutCard";
import LinkCard from "../Components/LinkCard/LinkCard";
import ProjectList from "../Components/ProjectList/ProjectList";
import Footer from "../Components/Footer/Footer";
import { Fab } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import firebaseConfig from "../firebaseConfig";

const findLanguage = () => {
	if (window.location.href.includes("/no")) {
		return "norwegian";
	} else if (window.location.href.includes("/en")) {
		return "english";
	}
	return "english";
};
let language = findLanguage();

const Homepage = () => {
	const [textData, setTextData] = useState(require("../TextData.json").english);

	const fetchDataFromDB = () => {
		let dbText = firebaseConfig
			.database()
			.ref(language)
			.orderByKey()
			.limitToLast(1000);
		dbText.on("value", function (snapshot, prevChildKey) {
			setTextData(snapshot.val());
		});
	};

	useEffect(() => {
		fetchDataFromDB();
		window.scrollTo(0, 0);
	}, []);

	$(window).scroll(function () {
		if ($(this).scrollTop() > 220) {
			$("#HomePageToTopButton:hidden").stop(true, true).fadeIn();
		} else {
			$("#HomePageToTopButton").stop(true, true).fadeOut();
		}
	});

	return (
		<div id="HomepageContainer">
			<div id="HomePageTitle">
				<h1>{textData.title}</h1>
			</div>

			<AboutCard data={textData} />
			<LinkCard data={textData} />
			<ProjectList data={textData} />
			<Footer data={textData} />
			<a
				onClick={() => {
					$("html, body").animate({ scrollTop: "0" }, 1500);
				}}
			>
				<Fab id="HomePageToTopButton" aria-label="to top">
					<FontAwesomeIcon
						id="FaButtonIcon"
						icon={faAngleUp}
						alt="Press this button for scrolling up to the top"
					/>
				</Fab>
			</a>
		</div>
	);
};
export default Homepage;
