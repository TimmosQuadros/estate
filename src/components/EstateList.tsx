import React from 'react';
import { Estate } from '../types';
import EstateItem from './EstateItem';

interface EstateListProps {
    estates: Estate[];
    onSelectEstate: (id: number) => void;
}

const EstateList: React.FC<EstateListProps> = ({ estates, onSelectEstate }) => {
    return (
        <div>
            {estates.map(estate => (
                <EstateItem key={estate.id} estate={estate} onSelect={onSelectEstate} />
            ))}
        </div>
    );
};

export default EstateList;
