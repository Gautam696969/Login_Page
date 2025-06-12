import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState( '' );
    const [password, setPassword] = useState( '' );
    const [showPassword, setShowPassword] = useState( false );
    const [error, setError] = useState( '' );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if ( !username || !password ) {
            setError( 'Please fill in all fields' );
            return;
        }

        if ( username.length > 8 ) {
            setError( 'Username must be 8 characters or less' );
            return;
        }

        if ( password.length > 8 ) {
            setError( 'Password must be 8 characters or less' );
            return;
        }

        if ( !symbolRegex.test( password ) ) {
            setError( 'Password must include at least one special symbol' );
            return;
        }

        setError( '' );
        console.log( 'Logged in:', { username, password } );
        alert( 'Login successful!' );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center font-semibold">{error}</p>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Username</label>
                        <input
                            type="text"
                            maxLength={8}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            value={username}
                            onChange={( e ) => setUsername( e.target.value )}
                            placeholder="Max 8 characters"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                maxLength={8}
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                value={password}
                                onChange={( e ) => setPassword( e.target.value )}
                                placeholder="Max 8 chars, with symbol"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-2 text-sm text-blue-500"
                                onClick={() => setShowPassword( ( prev ) => !prev )}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Sign up prompt */}
                <p className="mt-4 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <a href="#" className="text-indigo-600 font-semibold">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
