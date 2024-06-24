const Profile=()=>{
    return(
        <>
            <div className="container bg-dark mt-5 mb-5 p-5 rounded-4 align-items-center">
                <div className="d-flex flex-wrap border rounded-4 p-5 justify-content-center gap-5">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="150" height="150" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <h3 className="text-light">
                            Toktobekov Aidar
                        </h3>
                        <span className='ms-auto text-light'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            +123456789
                        </span>
                    </div>
                    <div className="d-flex align-items-center text-light ms-auto" style={{maxWidth: "500px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium earum tempora repellendus quibusdam vel voluptates dolores nulla, voluptate perspiciatis dolor saepe accusamus sed veritatis ratione odit necessitatibus animi quia?
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;