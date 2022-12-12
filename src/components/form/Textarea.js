function Textarea(props) {
    return (
        <div className="grid">
            <label className="font-semibold text-sm text-gray-500 mb-1">
                {props.label}
            </label>
            <textarea 
                name={props.name} 
                className="rounded-md p-3 resize-none border border-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                rows={props.rows}
            ></textarea>
        </div>
    );
}

export default Textarea;