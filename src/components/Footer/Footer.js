import "./Footer.css";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
				<div className='icons'>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener nooreferrer'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener nooreferrer'>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
