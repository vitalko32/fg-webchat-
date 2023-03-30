import React from 'react';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn('facebook')}
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default LoginButton;