import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import openDiscordApp from "../utils/openDiscord";



export default function Footer() {
    return (
        <footer className="container">
            <a tabIndex={-1}>
                <button onClick={openDiscordApp}><FontAwesomeIcon icon={faDiscord} /></button>
            </a>

            <a
                href='https://github.com/FluteNeko'
                target="_blank"
                tabIndex={-1}
            >
                <button><FontAwesomeIcon icon={faGithub} /></button>
            </a>
        </footer>
    );
}