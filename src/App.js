import { useState } from "react";
import AlbumListItem from "./AlbumListItem";
import AlbumDisplay from "./AlbumDisplay";
import albums from "./data";

function App() {

  const [displayAlbum, setDisplayAlbum] = useState(0);
  
  return (
    <div>
      <AlbumDisplay id={displayAlbum} />

      <h3>Select an Album</h3>

      <ul style={{padding:"0"}}>
        { 
          albums.map((album) => (
              <AlbumListItem 
                onShow={ () => setDisplayAlbum(album.id)}
                id={album.id}
                key={album.id}
              />
          ))
        }
      </ul>
      
    </div>
  );
}

export default App;