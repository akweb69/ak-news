import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <div className="">
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default RightAside;