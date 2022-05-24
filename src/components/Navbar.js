import meme from "../images/meme.png";
export default function Navbar() {
	return (
		<div className="navbar">
			<img className="navbar--logo" src={meme} />
			<h1 className="navbar--title">Meme Generator</h1>
			<h3 className="navbar--desc">React Course- Project 3</h3>
		</div>
	);
}
