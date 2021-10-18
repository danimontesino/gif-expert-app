import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={ handleInputChange }
                    placeholder="Buscar gifs"
                />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
