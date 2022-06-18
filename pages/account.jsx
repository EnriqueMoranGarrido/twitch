import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

const Account = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="pt-[100px] flex flex-col max-w-xl w-full mx-auto p-4">
        <h3 className="text-3xl font-bold">Welcome, {session.user.name} </h3>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="pt-[100px] flex flex-col max-w-xl w-full mx-auto p-4">
      <h2 className="text-3xl font-bold">Login</h2>
      <p className="py-4">Choose the account to sign in.</p>
      <button
        onClick={() => signIn()}
        className="flex items-center justify-center p-3 bg-gray-700 border border-gray-700 my-2"
      >
        <FaGithub className="mr-2" size={25} />
        Sign in with <span className="font-bold pl-1">GitHub</span>
      </button>
    </div>
  );
};

export default Account;
