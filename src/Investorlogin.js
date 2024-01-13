import logo from './image-8.png';
import backgroundImage from './investor.png';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { Alert, Spinner } from "@material-tailwind/react";
import app from "./db";

export default function InvestorLogin() {
    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // State for error message
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password); // Firebase function to login with email and password
            // Signed in successfully
            const user = auth.currentUser;
            if (user) {
                console.log(user);
                navigate("/InvestorPortal");
            } else {
                setError("No user found!");
            }
        } catch (error) {
            // Error occurred during sign-in, set the error message
            setError("Error signing in with email and password!");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
                        <img
                            className="mx-auto h-10 w-auto sm:h-12 mb-10"
                            src={logo}
                            alt="ME"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Investor Login
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {error && (
                            <Alert color="red">
                                {error}
                            </Alert>
                        )}
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-[#135C74] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#135C74] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#135C75] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={login}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Spinner size="sm" color="blue" />
                                    ) : (
                                        "Sign in"
                                    )}
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-sm text-gray-500">
                            Welcome to the ME Real Estate Investor Portal!
                            This section on our website is exclusively intended for existing and potential investors of ME Real Estate. To request access, kindly reach out to us at the following:{' '}
                            <br />
                            <br />
                            <a href="#" className="font-semibold leading-6 text-[#135C74] hover:text-[#135C75]">
                                Email: Retail@mereig.com
                                <br />
                                Phone: 614-722-1000
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
