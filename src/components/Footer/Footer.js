import "./Footer.css";
import "../../App.css";

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
						<i className='fa-brands fa-instagram'></i>
					</a>
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener nooreferrer'>
						<i className='fa-brands fa-square-facebook'></i>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
