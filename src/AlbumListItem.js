import albums from "./data";

export default function AlbumListItem (props) {
    
    const {id, onShow} = props;
    const {coverImg, name} = albums[id];

    return (
        <li style={{display:"flex", alignItems:"center"}}>
            <img 
             src={coverImg} 
             alt={name}
             onClick={onShow}
             style={{width:"60px", 
                     borderRadius:"50%",
                     margin: "20px 10px 0 0"}} 
            />
            <span onClick={onShow}>{name}</span>
        </li>
    );
}