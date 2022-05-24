import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
// import memesData from "../memesData";

export default function Meme() {
	// const [memeImage, setmeme] = useState("http://i.imgflip.com/1bij.jpg");
	const [currMeme, setCurrMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [apiMemes, setMemes] = useState([]);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setMemes(data.data.memes));
	}, []);

	// const [allMemes, setAllMemes] = useState(memesData);

	function getMemeImage() {
		const memesArray = apiMemes;
		const num = Math.floor(Math.random() * memesArray.length);
		const currImg = memesArray[num].url;
		setCurrMeme((prevMeme) => ({ ...prevMeme, randomImage: currImg }));
	}

	function handleChange(event) {
		//destructure
		const { name, value } = event.target;
		setCurrMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
		console.log(value);
	}

	return (
		<main className="main">
			<form className="form">
				<input
					type="text"
					placeholder="Top Text"
					className="form--input"
					onChange={handleChange}
					name="topText"
					value={currMeme.topText}
				/>
				<input
					type="text"
					placeholder="Bottom Text"
					className="form--input"
					onChange={handleChange}
					name="bottomText"
					value={currMeme.bottomText}
				/>
			</form>
			<button className="form--button" onClick={getMemeImage}>
				Get a new meme image 🖼
			</button>
			<div className="memeArea">
				<img className="memeImg" src={currMeme.randomImage} alt="meme" />
				<h2 className="meme--text top">{currMeme.topText}</h2>
				<h2 className="meme--text bottom">{currMeme.bottomText}</h2>
			</div>
		</main>
	);
}
