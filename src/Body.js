import React from 'react';
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
import "./Body.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useStateValue();
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="body__info">
            <img src={discover_weekly?.images[0].url} alt="" />
            <div className="body__infoText">
            <strong>PLAYLISTS</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
         </div>
        </div>
             <div className="body__songs">
            <div className="body__icons">
               <PlayCircleFilledIcon className="body__shuffle"/>
               <FavoriteIcon fontSize="large"/>
               <MoreHorizIcon/>
               {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
          </div>
        </div>
    </div>
    )
}

export default Body;
