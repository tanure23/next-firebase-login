import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';

const Private = () => {
  const { user, logout } = useUser();

  return (
    <div >
      <div>Vc ta logado!</div>
      {
        user?.email &&
        <div>
          <div>Email: {user.email}</div>
          <button onClick={() => logout()}>Logout</button>
        </div> 
      }
    </div>
  )
}

export default withAuth(Private);