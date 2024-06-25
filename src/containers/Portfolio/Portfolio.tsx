import Countries from "../../compenents/Projects/Countries/Countries";
import UsersManagement from "../../compenents/Projects/userManagement/UserManagement";
import Poker from '../../compenents/Projects/Poker/Poker.tsx'
import ModalWindow from "../../compenents/Projects/Modal/ModalWindow.tsx";

const Portfolio=()=>{
    return(
        <>
            <div className="bg-dark container text-light py-5 rounded-4 my-5 mx-auto">
                <Countries/>
            </div>

            <div className="bg-dark container text-light py-5 rounded-4 my-5 mx-auto">
                <UsersManagement/>
            </div>
            
            <div className="bg-dark container text-light py-5 rounded-4 my-5 mx-auto">
                <ModalWindow/>
            </div>

            <div className="bg-dark container text-light py-5 rounded-4 mt-5 mx-auto" style={{marginBottom: '140px'}}>
                <Poker/>
            </div>
        </>
    )
}

export default Portfolio;