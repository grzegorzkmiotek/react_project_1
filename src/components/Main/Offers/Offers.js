import "./Offers.css";
import { offers } from "../../../data/offers";

function Offers() {
	return (
		<section className='offers' id='offers'>
			<div className='container'>
				<h2 className='offers-subtitle'>Czym zajmuje się nasza firma?</h2>
				<div className='offers-wrapper'>
					{offers.map((offer) => (
						<div className='box'>
							<p className='new-offer'>{offer.name}</p>
							{offer.isNew ? <p className='bottom'>(Nowość)</p> : null}
							{offer.isNew ? <div className='circle'></div> : null}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Offers;
