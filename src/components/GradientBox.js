function GradientBox(props) {
    return (
        <div 
        className={
            "w-1/6 aspect-square rounded-xl xl:block hidden" +
            ` ${props.className} `
        } 
        />
    );
}

export default GradientBox;