
const User = () => {
    return (
        <div>
            <div className='h-[50vh] flex justify-center items-center'>
                <div>
                    <h2 className='text-4xl font-semibold mb-4'>Add Users & Counter</h2>
                    <p className='text-xl font-semibold text-center'>using react-redux</p>
                    <div className='flex flex-col justify-center items-center mt-7 gap-5'>
                        <p className='font-bold text-xl'></p>
                        <form className="flex gap-3">
                            <input type="text" placeholder="Enter user name" className="input input-bordered input-error w-full max-w-xs" />
                            <button className="btn btn-outline btn-error">Add User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;