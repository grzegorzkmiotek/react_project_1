import "./Header.css";
import "../../App.css";

function Header() {
	return (
		<header className='header' style={{ backgroundImage: "url(/Mountains.jpg)" }}>
			<div className='shadow'>
				<div className='container'>
					<h1 className='header-title'>
						Nasza firma oferuje najwyższej jakości produkty.
					</h1>
					<h2 className='header-subtitle'>Nie wierz nam na słowo - sprawdź</h2>
					<a href='#offers' className='offer-btn'>
						oferta
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
