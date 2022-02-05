import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {NavLink, useHistory} from "react-router-dom"
import {UserStoreContext} from '../context/UserContext'

function NavBar() {

    const history = useHistory()

    const userStore = React.useContext(UserStoreContext)

    //const [profile,setProfile] = React.useState(null)

    // const getProfile = () => {
    //     //localStorage.getItem('profile')
    //     const profileValue = JSON.parse(localStorage.getItem('profile'))
    //     if(profileValue){
    //         setProfile(profileValue)
    //     }
    // }

    // React.useEffect(() => {
    //     getProfile()
    // },[])

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('profile')
        history.replace('/')
        history.go(0)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                
                    {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                    <NavLink className="navbar-brand" exact to="/">React-Boostrap</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to="/product">Product</NavLink>
                            {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>
                            <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => {
                                    history.replace('/hospital')
                                }}>Hospital List</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => {
                                    history.replace('/category')
                                }}>News  Category</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" activeClassName="active" to="/upload">Upload</NavLink>
                            <NavLink className="nav-link" activeClassName="active" to="/member">Member</NavLink>

                        </Nav>
                        
                        {
                            userStore.profile ? (
                                <span className='nav-text'>Welcome {userStore.profile.name} 
                                    <button className='btn btn-danger ml-2'onClick={logout} >
                                        Logout
                                    </button>
                                </span>
                            ) : (
                                <>
                                    <Nav>
                                        <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                                        <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                                    </Nav>
                                </>
                            )
                        }
                    </Navbar.Collapse>
                
            </Navbar>
        </div>
    )
}

export default NavBar
