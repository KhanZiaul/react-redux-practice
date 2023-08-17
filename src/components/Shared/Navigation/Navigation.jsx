import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="flex justify-between bg-sky-500 text-white items-center p-5 mt-1">
            <Link to="/" className="btn btn-ghost normal-case text-3xl">Redux</Link>
            <div className="flex gap-7 text-xl font-semibold">
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
            </div>
        </div>
    );
};

export default Navigation;