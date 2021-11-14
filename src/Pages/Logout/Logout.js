import React from 'react';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
    const { logout } = useAuth();
    return (
        <div>
            <button onClick={logout} type="button" class="btn btn-primary">LogOut</button>

        </div>
    );
};

export default Logout;