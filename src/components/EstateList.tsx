import React from 'react';
import { Link } from 'react-router-dom';
import { Estate } from '../types/types.ts';
import isSafari from "../utils/utils.tsx";

interface EstateListProps {
    estates: Estate[];
}

const EstateList: React.FC<EstateListProps> = ({ estates }) => {
    const imageClass = isSafari() ? "estate-image-safari" : "estate-image";
    return (
        <div className="estate-list">
            {estates.map((estate) => (
                <Link to={`/booking/${estate.id}`} key={estate.id} className="estate-card">
                    <div>
                        <img src={estate.imageUrl} alt={estate.title} className={imageClass}/>
                        <h2>{estate.title}</h2>
                        <p>{estate.description}</p>
                        <p>{estate.address}</p>
                        <p>Price: DKK{estate.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default EstateList;
