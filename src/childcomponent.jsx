const childcomponent=({text,children})=>{
    return(
        <div>
            <h1>childcomponent</h1>
            <p>{text}</p>
            {children}
             
        </div>
    );
};

export default childcomponent;