import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

function ChatButton(props) {
    return (
        <button
            onClick={props.toggleWindow}
            className={
                'bg-slate-800 w-16 aspect-square rounded-full drop-shadow-2xl text-white fixed bottom-10 right-10 z-10 hover:bg-slate-700 hover:-translate-y-1 transition duration-300' +
                (props.isOpen ? " opacity-0 " : "")
            }
        >
            <FontAwesomeIcon icon={faMessage} />
        </button>
    );
}

export default ChatButton;