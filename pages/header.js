import {useSession, signIn, signOut} from 'next-auth/react';

export default function Header() {
  const {data: session} = useSession();
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
      <div className="header">
        {session ? (
            <>
              <div style={{marginBottom: '10px'}}>
                Welcome, {session.user.name ?? session.user.email}
              </div>
              <a href="#" onClick={handleSignout} className="btn-signin">
                <button>Sign out</button>
              </a>
            </>
        ) : (
            <>
              <div>Please Sign in</div>
              <a href="#" onClick={handleSignin} className="btn-signin">
                <button> Sign in</button>
              </a>
            </>
        )}
      </div>
  );
}
