import { Outlet } from "react-router-dom";
import CenterNews from "./CenterNews";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const Main = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto md:grid md:grid-cols-12 gap-3">
                <aside className="col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <div className="col-span-6">
                    <h1 className="text-lg mb-3 font-semibold">
                        The AK News Home
                    </h1>
                    <Outlet></Outlet>
                </div>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default Main;