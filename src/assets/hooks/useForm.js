import React from "react";

const types = {
    username: {
        regex: /^([a-zA-Zà-úÀ-Ú]|\s+)+$/i,
        message:'Fill in a valid name',
    },
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        message:'Preencha um email valido',
    },
    phone: {
        regex: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        message: 'Please enter a valid number'
    },
    password: {
        regex: /^[0-9]{4,6}$/,
        message: 'Enter between 4 and 6 digits, just numbers'
    },
    checkbox: {
        message: 'checkbox test'
    },

    
};

const useForm = (type) => {
const [value, setValue] = React.useState('');
const [error, setError] = React.useState(null);
    
    function validate(value) {
        if(type === false) return true;
        if(value.length === 0) {
            setError('Required field');
            return false;
        }else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        }else {
            setError(null)
            return true;
        }
    }
    function onChange({ target }) {
        validate(target.value)
        setValue(target.value);

    }
    return { 
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
        
    };
};

export default useForm;