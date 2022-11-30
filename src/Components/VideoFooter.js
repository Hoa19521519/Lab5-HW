import React from 'react'
import Ticker from 'react-ticker'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
            <MusicNoteIcon className="videoFooter-icon"/>
            <Ticker mode="smooth">
                {({ index }) => (
                    <>
                        <p>{song}</p>
                    </>
                )}
            </Ticker>
        </div>
      </div>
      <img className="videoFooter_record" src="https://www.youtube.com/watch?v=hJNvqWBIQ6U" alt="video footer"/>
    </div>
  )
}

export default VideoFooter