import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="text-lg font-semibold">Login with</h1>
            <div className="btn w-full rounded-none bg-cyan-100 hover:bg-cyan-700 hover:text-white">
                <FaGoogle />
                Login with Google
            </div>
            <div className="btn w-full rounded-none mt-1 bg-cyan-100 hover:bg-cyan-700 hover:text-white">
                <FaGithub />
                Login with Github
            </div>
        </div>
    );
};

export default SocialLogin;