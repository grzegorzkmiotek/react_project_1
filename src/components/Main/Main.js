import "./Main.css";
import "../../App.css";

function Main() {
	return (
		<main>
			<section className='specialists' id='specialists'>
				<div className='container'>
					<h2 className='specialists-subtitle'>Nasi specjaliści</h2>
					<div className='specialist'>
						<div
							className='specialist-img'
							style={{
								backgroundImage: "url(/Specialist.jpeg)",
							}}></div>
						<div className='specialist-info-wrapper'>
							<p className='specialist-name'>John Doe [IT]</p>
							<p className='specialist-description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
								vel massa et lacus egestas cursus a non magna. Fusce scelerisque
								blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
								tempor elementum lorem in, varius pellentesque ligula. Duis
								efficitur lacinia enim, non tincidunt libero ultrices in.
							</p>
						</div>
					</div>
					<div className='specialist'>
						<div
							className='specialist-img'
							style={{
								backgroundImage: "url(/Specialist2.jpg)",
							}}></div>
						<div className='specialist-info-wrapper'>
							<p className='specialist-name'>Sara Smith [Marketing]</p>
							<p className='specialist-description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
								vel massa et lacus egestas cursus a non magna. Fusce scelerisque
								blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
								tempor elementum lorem in, varius pellentesque ligula. Duis
								efficitur lacinia enim, non tincidunt libero ultrices in.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='offers' id='offers'>
				<div className='container'>
					<h2 className='offers-subtitle'>Czym zajmuje się nasza firma?</h2>
					<div className='offers-wrapper'>
						<div className='box'>
							<div className='circle'></div>
							<p className='new-offer'>Usługa 1</p>
							<p className="bottom">(nowość)</p>
						</div>
						<div className='box'>
							<p>Usługa 2</p>
						</div>
						<div className='box'>
							<p>Usługa 3</p>
						</div>
						<div className='box'>
							<p>Usługa 4</p>
						</div>
						<div className='box'>
							<p>Usługa 5</p>
						</div>
						<div className='box'>
							<p>Usługa 6</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;
