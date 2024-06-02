import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import profilePicture from "/assets/images/profile_picture.jpg";



export default function Info() {
    return (
        <div className='info'>
            <img src={profilePicture} alt='Image of the person behind this project' />
            <div className="container">
                <h1>Nekoy</h1>
                <h3>Full-stack Developer</h3>
                <a href='https://github.com/FluteNeko' target='_blank' rel='noopener noreferrer'>github.com/fluteneko</a>
                <div className='list'>
                    <button className='email'><FontAwesomeIcon icon={faEnvelope} />Email</button>
                    <button className='linkedin'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
                </div>
            </div>
        </div>
    );
}