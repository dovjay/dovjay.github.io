function Input(props) {
    return (
        <div className="grid">
            <label className="font-semibold text-sm text-gray-500 mb-1">
                {props.label}
            </label>
            <input 
                type={props.type} name={props.name} required={props.required || false}
                className="rounded-md h-12 p-3 border border-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
        </div>
    );
}

export default Input;