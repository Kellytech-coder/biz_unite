import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {Object.values(providers).map((provider: any) => (
        <button
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className="bg-blue-500 text-white p-3 rounded-md"
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
}

SignIn.getInitialProps = async () => {
  const providers = await getProviders();
  return { providers };
};
