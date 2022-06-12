import albums from "./data";
import Track from "./Track";

export default function AlbumDisplay (props) {

    const {id} = props;
    const {coverImg, name, tracks} = albums[id];

    return (
        <div style={{display:"flex"}}>
            <img src={coverImg} alt={name} style={{width:"300px"}}/>
            <ol>
                { tracks.map( (track) => (
                    <Track track={track} key={track}/>
                ))}
            </ol>
        </div>
    );
}