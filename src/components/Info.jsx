import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import profilePicture from "/assets/images/profile_picture.jpg";
import openDiscordApp from "../utils/openDiscord";



export default function Info() {
    return (
        <div className='info'>
            <img src={profilePicture} alt='Image of the person behind this project' />
            <div className="container">
                <h1>Nekoy</h1>
                <h3>Full-stack Developer</h3>
                <a
                    href='https://github.com/FluteNeko'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='website'
                >
                    github.com/fluteneko
                </a>

                <div className='list'>
                    {/*
                        .lighter_text - Lighter color text
                        .darker_text - Darker color text

                        .hover_darker | .hover_ligher
                        > Same logic

                        .github | .instagram | .linkedin | ...
                        > Brand's button color
                        > Optional
                    */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={-1}
                    >
                        <button onClick={openDiscordApp}>
                            <FontAwesomeIcon icon={faDiscord} />
                            dafluteneko
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}