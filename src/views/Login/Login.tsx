import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '@/stores/api/api-slice';

export default function LoginPage() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Dispatch the action to update the Redux store with the input value
        dispatch(set(inputValue));

        // Optionally, you can clear the input after submitting
        setInputValue('');
    };

    return (
        <div id="login-page">
            <div>I am Login</div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
