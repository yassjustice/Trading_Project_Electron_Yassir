import { useEffect } from "react";
import { UserC } from "../context/AuthContext";
// import { jwtDecode } from "jwt-decode";

export const isAuth = () => {
    const { userTest, entryUser, setCurrentUser } = UserC();

    // const storedToken = localStorage.getItem("token");

    // if (storedToken) {
    //         return true
    // }
    // useEffect(() => {
    //     if (entryUser.email === userTest.email && entryUser.password === userTest.password) {
    //         setCurrentUser(userTest)
    //     }
    // }, [entryUser]);

    return true;   
};

