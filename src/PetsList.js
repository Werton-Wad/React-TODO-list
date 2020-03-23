import React from 'react';
import PetItem from './PetItem';


function PetsList(props) {
    const $petsList = props.petsList.map(list => {
        return <PetItem key={list.id} {...list} deletePetItem={props.deletePetItem}/>;
    });
    return (
        <ul className="list">
            {$petsList}
        </ul>
    );
}

export default PetsList;