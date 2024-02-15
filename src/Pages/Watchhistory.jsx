import { Link } from "react-router-dom";
function Watchhistory() {

    return (
        <>
            <div className="container mt-5 d-flex justify-content-between align-item-center mb-5">
                <h3>Watch History</h3>
                <Link style={{ color: "white", textDecoration: "none" }} to={'/home'}>
                    <i class="fa-solid fa-arrow-left me-2"></i>
                    Back To Home

                </Link>
            </div>

            <table className="table mt-5 mb-5 container">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caption</th>
                        <th>URL</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I</td>
                        <td>Divani</td>
                        <td>http://www.youtube.com/divanoi/vedio/1</td>
                        <td>06/12/2023</td>
                    </tr>
                </tbody>
            </table>

        </>
    )

}
export default Watchhistory;