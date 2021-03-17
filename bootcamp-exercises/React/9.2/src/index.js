import React from "react";
import ReactDom from "react-dom";
import MusicAlbum from "./MusicAlbum";
import "./style.css";

class App extends React.Component {
	state = { visible: true, random: null };

	componentDidMount() {}

	render() {
		return (
			<div>
				<MusicAlbum
					title="Pet Sounds"
					img="https://upload.wikimedia.org/wikipedia/he/b/bb/PetSoundsCover.jpg"
					artistName="The Beach Boys"
					numOfSongs={13}
					length="35:57"
					src="https://www.youtube.com/watch?v=hONnenV2lZg"
				/>
				<MusicAlbum
					title="רדיו בלה בלה"
					img="https://upload.wikimedia.org/wikipedia/he/b/b1/Hachverim_Sh_Natacha_Radio.jpg"
					artistName="החברים של נטאשה"
					numOfSongs={16}
					length="1:41:10"
					src="https://www.youtube.com/watch?v=hONnenV2lZg"
				/>
				<MusicAlbum title="test" numOfSongs={7}></MusicAlbum>
				<MusicAlbum></MusicAlbum>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#root"));
