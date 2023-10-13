import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "../../Styles/ProfilePage.scss";
import NavbarComponent from "../../CommonComponents/Navbar/NavbarComponent";
import EditModal from "./EditModal";
import PasswordModal from "./PasswordModal";
import ProfileImage from "../../CommonComponents/Profile Image/ProfileImage";
import Button from "../../CommonComponents/Buttons/BasicButtonComponent";
import { auth, db } from '../../configurations/firebase';
import logging from '../../configurations/logging';
import Logout from "../LogoutPage/logout";


function ProfilePage(){

    const [role, setRole] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [dob, setDOB] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        auth.onAuthStateChanged( async user => {
            if (user) {
                if(user.emailVerified) {
                
                    const q = query(collection(db, "users"), where("email", "==", user.email));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        // Calling for user's profile from Firestore Database
                        setRole(doc.data().role);
                        setFirstName(doc.data().firstName);
                        setLastName(doc.data().lastName);
                        setEmail(doc.data().email);
                        setDOB(doc.data().dob);
                    });
            }}
    })}, []);

    return (
        <div className="main-page">
            <NavbarComponent/>
        <div className="container">
            <div className="avatar"> 
                <ProfileImage />
            </div>

            {/* Data table storing user information */}
            <div className="table-wrap">
                <div className="table-responsive">
                    <h1>Profile Information</h1>
                    <h4>Manage your personal information</h4>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                            <th scope="row">Name</th>
                            <td>{firstName + "   " + lastName}</td>
                            </tr>
                            <tr>
                            <th scope="row">Date of Birth</th>
                            <td>{dob}</td>
                            </tr>
                            <tr>
                            <th scope="row">Email Address</th>
                            <td>{email}</td>
                            </tr>
                            <tr>
                            <th scope="row">Role</th>
                            <td>{role}</td>
                            </tr>
                            <tr>
                            <th scope="row">Saved Studies</th>
                            <td><a href="#">Edit Saved Studies</a></td>
                            </tr>
                            <tr>
                            <th scope="row">Preferences</th>
                            <td><a href="#">Edit Preferences</a></td>
                            </tr>
                            <tr>
                            <th scope="row">Password</th>
                            <td><PasswordModal /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="edit">
                            <EditModal/>
                            <span style={{marginRight: "30px"}}></span>
                            <Logout/>
                    </div>
                </div>
           </div>
        </div>   
    </div>

    );


}

export default ProfilePage;