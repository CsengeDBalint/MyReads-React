import React from 'react';

function ShelfChanger(){
    return(
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Select...</option>
                <option value="currentlyReading">Presently reading</option>
                <option value="wantToRead">Have in mind</option>
                <option value="read">Already read</option>
                <option value="none">None</option>
            </select>
        </div>
    )

}

export default ShelfChanger;