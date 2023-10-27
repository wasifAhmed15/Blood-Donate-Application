import { BrowserRouter as Router  , Routes,Route} from "react-router-dom";
import SignupData from "../Screen/Signup";
import LoginData from "../Screen/Login";
import MainPage from "../Dashbord/MainPage";

export default function Approuter(){
    return<>
    
<Router>
 <Routes>
    <Route path="/" element={<LoginData/>}/>
    <Route path="Signup" element={<SignupData/>}/>
    <Route path="Main/*" element={<MainPage/>}/>
 </Routes>
</Router>
    </>

}