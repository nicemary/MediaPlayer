import { Link } from "react-router-dom";
import Add from "../Components/Add";
import Category from "../Components/Category";
import View from "../Components/View";



function Home() {
    return (
        <div>
            <div className="container mt-5  md-5 d-flex align-items-center justify-content-between align-item-center">
                <div className="add_videos">
                    <Add/>
                    {/* add uplod new vedio component */}
                </div>
                <div>
                    <Link to={'./watch'} style={{ textDecoration: "none", color: "white", fontSize: "30px" }}> Watch History</Link>
                </div>

               
            </div>
            <div className="container mt-5  md-5 d-flex align-items-center justify-content-between align-item-center">
                <div className="all-vedio col-md-6 mt-5">
                    <h4>All Vedios</h4>
                    
                    <View/>
                   
                </div>
                <div>
                    <Category/>
                </div>

            </div>
        </div>
    )
}
export default Home;