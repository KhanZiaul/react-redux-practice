import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/action";

const User = () => {
    const mystate = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addUser(e.target.userName.value))
    }

    return (
        <div className='flex justify-center items-center mt-6'>
            <div>
                <h2 className='text-4xl font-semibold mb-4'>Add Users & Counter</h2>
                <p className='text-xl font-semibold text-center'>using react-redux</p>
                <div className='flex flex-col justify-center items-center mt-7 gap-5'>
                    <p className='font-bold text-xl'>{mystate.count}</p>
                    <p className='font-bold text-xl'></p>
                    <div className='flex flex-col gap-3 font-bold text-xl'>{mystate?.users?.map((user, index) => {
                        return (
                            <p key={index}>{user}</p>
                        )
                    })}</div>
                    <form onSubmit={handleSubmit} className="flex gap-3">
                        <input name="userName" type="text" placeholder="Enter user name" className="input input-bordered input-error w-full max-w-xs" />
                        <button className="btn btn-outline btn-error">Add User</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default User;