import * as  React from 'react'
import {Link } from 'react-router-dom'

const Navbar: React.SFC<INavbarProps> = (props) => {



    return (
        <>
            <div className="row m-3">
                <div className="col-md-12">
                    <ul className="nav justify-content-around">
                        <li className="nav-item btn btn-outline-info">
                            <Link to='/'>Active</Link>
                        </li>
                        <li className="nav-item btn btn-outline-info">
                        <Link to='/'>Active</Link>

                        </li>
                        <li className="nav-item btn btn-outline-info">
                        <Link to='/'>Active</Link>
                        </li>
                        <li className="nav-item btn btn-outline-info">
                        <Link to='/'>Active</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}



interface INavbarProps { }

export default Navbar