function Button(props) {
    return (
        <button 
            type={props.type} name={props.name} onClick={props.onClick} disabled={props.disabled}
            className="bg-slate-800 text-white font-semibold p-3 rounded-md hover:bg-slate-700 active:bg-slate-900 disabled:bg-slate-800/50"
        >
            {props.name}
        </button>
    );
}

export default Button;