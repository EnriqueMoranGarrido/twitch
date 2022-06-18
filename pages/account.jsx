import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";

const Account = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="pt-[100px] flex flex-col max-w-xl w-full mx-auto p-4">
        <h3 className="text-3xl font-bold">Welcome, {session.user.name} </h3>
        <p className="py-4">Signed in as {session.user.email}</p>
        <div className="pb-4 m-auto">
          <Image
            src={session.user.image}
            alt=""
            width={"150%"}
            height={"150%"}
            className="rounded-full"
          />
        </div>
        <button
          className="flex items-center justify-center p-3 bg-gray-700 border border-gray-700 my-2 "
          onClick={() => signOut()}
        >
          Sign out
        </button>
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

      <button
        onClick={() => signIn()}
        className="flex items-center justify-center p-3 bg-blue-700 border border-gray-700 my-2"
      >
        <FaGoogle className="mr-2" size={25} />
        Sign in with <span className="font-bold pl-1">Google</span>
      </button>
    </div>
  );
};

export default Account;
