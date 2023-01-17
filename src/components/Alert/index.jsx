import { FiX } from 'react-icons/fi';
import './alert.css';

export function Alert({ message, closeAlert }) {
    return (
        <div className="container-alert">

            <header className="header-alert">

                <h2 className="title">titulo</h2>
                <FiX size={20} color="#fff" 
                className='icon-close'
                onClick={() => closeAlert()}
                />

            </header>

            <p className='message'>
                {message}
            </p>

        </div>
    );
};
