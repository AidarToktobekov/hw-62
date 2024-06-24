interface Props{
    src: string;
    title: string;
    text: string;
}

const Cards:React.FC<Props>=({src, title, text})=>{
    return(
        <>
        <div className="card " style={{width: '300px'}}>
            <img src={src} className="card-img-top" style={{width: 'fit-content', margin: 'auto', height: '300px'}} alt="image"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <button className="btn btn-dark">Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default Cards