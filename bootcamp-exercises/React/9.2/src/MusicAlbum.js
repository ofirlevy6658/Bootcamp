import React from "react";
import "./style.css";
const MusicAlbum = ({
	title = "Blood Sugar Sex Magik",
	img = "https://upload.wikimedia.org/wikipedia/he/9/94/RedHotChiliPeppersBloodSugarSexMagik.jpg",
	artistName = "Red Hot Chili Peppers",
	numOfSongs = 17,
	length = "1:13:56",
	src = "https://www.youtube.com/watch?v=-iB10tgKHkw",
}) => {
	return (
		<div className="album">
			<h3>{title}</h3>
			<img src={img} alt="album img" />
			<h4>{artistName}</h4>
			<p>Songs: {numOfSongs}</p>
			<p>{length}</p>
			<a href={src} target="_blank">
				Click here to hear the album
			</a>
		</div>
	);
};

export default MusicAlbum;
