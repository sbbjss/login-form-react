import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    const {
        type,
        id,
        onChangeHandler,
        onBlurHandler,
        state,
        label
    } = props;

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        };
    });

    return (
        <div
            className={`${classes.control} ${
                state.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={id}>{label}</label>
            <input
                ref={inputRef}
                type={type}
                id={id}
                value={state.value}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
            />
        </div>
    );
});

export default Input;