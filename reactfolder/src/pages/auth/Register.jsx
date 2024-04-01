import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { RegisterUser } from "../../../api/userApi";
import { UserC } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/images/FramelogoOff.png";
import googleLogo from "../../assets/images/Google-Symbol.png";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link target="_blank" color="inherit" href="/">
                Last Brokerage House
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

// const defaultTheme = createTheme();
const customTheme = createTheme({
    palette: {
        primary: {
            main: "#0C8140", // Your desired main color
            light: "#8fcaed", // Lighter shade for text or background
            dark: "#00583b", // Darker shade for accents or borders
        },
        secondary: {
            main: "#1976D2", // Secondary color for contrast
        },
        // ... other optional color configurations
    },
});

export const Register = () => {
    useEffect(() => {
        document.title = `Register - ${import.meta.env.VITE_APP_TITLE}`;
    }, []);

    const navigate = useNavigate();
    // const { setCurrentUser } = UserC();
    const { userTest, entryUser, setCurrentUser, setEntryUser } = UserC();

    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let body = {
            email: data.get("email"),
            password: data.get("password"),
        };
        try {
            // const response = await RegisterUser(body);
            // const loggedUser = response.data;
            // // console.log(loggedUser);
            // localStorage.setItem("userId", loggedUser.user._id);
            // localStorage.setItem("token", JSON.stringify(loggedUser.token));
            console.log(body);
            setEntryUser(body);
            navigate("/dashboard");
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />

                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={7}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 1.1,
                            mx: 20,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            // width: "60%"
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <img
                            src={logo2}
                            style={{
                                margin: "15px",
                            }}
                        ></img>
                        <Typography
                            component="h1"
                            variant="h5"
                            sx={{ fontWeight: "bold", alignSelf: "flex-start" }}
                        >
                            Sign Up
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                name="fullName"
                                autoComplete="fullName"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            /> */}
                            {error && (
                                <div style={{ color: "red" }}>{error}</div>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        borderTop: 2,
                                        borderColor: "divider",
                                        width: "30%",
                                        height: 1,
                                        mt: 1,
                                        mb: 1,
                                    }}
                                />
                                <Typography
                                    sx={{ mx: 2, color: "text.secondary" }}
                                >
                                    or
                                </Typography>
                                <Box
                                    sx={{
                                        borderTop: 2,
                                        borderColor: "divider",
                                        width: "30%",
                                        height: 1,
                                        mt: 1,
                                        mb: 1,
                                    }}
                                />
                            </Grid>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "black",
                                    color: "white",
                                    font: "DM Sans",
                                }} // Align "Google" and icon left
                            >
                                <img
                                    src={googleLogo}
                                    alt="Google logo"
                                    style={{ width: 35, marginRight: 10 }}
                                />
                                Continue With Google
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"you already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={5}
                    sx={{
                        backgroundImage: "url(src/assets/images/image1.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </Grid>
        </ThemeProvider>
    );
};
