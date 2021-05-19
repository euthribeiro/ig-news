import { useSession, signOut, signIn } from 'next-auth/client'
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './style.module.scss';

export function SignInButton() {

  const [session] = useSession();

  return session ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" 
        className={styles.closeIcon} 
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button 
      className={styles.signInButton} 
      onClick={() => signIn()}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}