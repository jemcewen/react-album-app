import play from './play.svg';

export default function Track(props) {
    
    const {track} = props;
    
    return (                     
        <li>
            <div style={{display:"flex", alignItems:"center"}}>
                <span style={{fontSize: "20px"}}>{track}</span>
                <img src={play} style={{width: "20px", marginLeft: "5px"}} alt="play"/>
            </div>
        </li>
    );
}