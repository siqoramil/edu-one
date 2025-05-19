import { cards_data } from '../../data/cards_data';
import './cards.scss';

export const Cards = () => {
    return (
        <div className="cards">
            {cards_data &&
                cards_data.map((c) => (
                    <div className="card">
                        <div className="icon">{c.icon}</div>
                        <br />
                        <h1>{c.title}</h1>
                        <br />
                        <p>{c.text}</p>
                    </div>
                ))}
        </div>
    );
};
