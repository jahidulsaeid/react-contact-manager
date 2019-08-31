import React from 'react'
import PropType from 'prop-types';
import classnames from 'classnames'

const TextInputField = ({
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {

    return (
        <div className={classnames('field',{'error': error})}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div class="ui pointing red basic label">
                {error}
            </div>}
            
        </div>
    )
}
TextInputField.protoTypes = {
    name: PropType.string.isRequired,
    type: PropType.string.isRequired,
    placeholder: PropType.string.isRequired,
    value: PropType.string.isRequired,
    onchange: PropType.func.isRequired,
    error: PropType.string
}

TextInputField.defaultProps = {
    type: 'text'
}

export default TextInputField
