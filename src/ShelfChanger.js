import React from 'react';

function ShelfChanger(props){
    return(
        <div className="book-shelf-changer">
            <select value = {props.shelf || 'none'} onChange ={(event) =>props.changeShelf(props.book, event.target.value)} >
                <option value="move" disabled>Select...</option>
                <option value="currentlyReading">Presently reading</option>
                <option value="wantToRead">Have in mind</option>
                <option value="read">Already read</option>
                <option value="none">None</option>
            </select>
        </div>
    )

}

export default ShelfChanger
//https://stackoverflow.com/questions/28624763/retrieving-value-from-select-with-multiple-option-in-react