import React from 'react'
import './VideoFooter.css'
import {Button,Avatar} from "@material-ui/core"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ModeCommentIcon from "@material-ui/icons/ModeComment"
import SendIcon from "@material-ui/icons/Send"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import Ticker from "react-ticker"

function VideoFooter({channel,avatarSrc,song,likes,shares}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <Avatar src={avatarSrc}/>
                <h4>
                    {channel} • <Button>Follow</Button>    
                </h4>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon"/>
                <Ticker className="ticker">
                    {({index})=>(
                        <>
                        <h4>{song}</h4>
                        </>
                    )}
                </Ticker>
                <div className="videoFooter__actions">
                    <div className="videoFooter__actionsLeft ">
                        <FavoriteIcon />
                        <ModeCommentIcon />
                        <SendIcon />
                        <MoreHorizIcon />
                    </div>   
                    <div className="videoFooter__actionsRight ">
                        <div className="videoFooter__stat">
                            <FavoriteIcon  className="icon"/>
                            <p>{likes}</p>
                        </div>
                        <div className="videoFooter__stat">
                            <ModeCommentIcon 
                            className="icon"/>
                             <p>{shares}</p>
                        </div>
                    
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
