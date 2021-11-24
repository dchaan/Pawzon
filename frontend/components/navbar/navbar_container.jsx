import { connect } from "react-redux";
import React from "react";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";

const mSTP = state => ({
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

const NavbarContainer = connect(mSTP, mDTP)(Navbar);
export default NavbarContainer;
