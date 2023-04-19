import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const login = async () => {
  signInWithPopup(auth, provider).catch(console.error);
};

const logout = async () => {
  signOut(auth).catch(console.error);
};

const dbRef = ref(getDatabase());

const onUserStateChange = (
  callback: (user: (User & { isAdmin: boolean }) | null) => void,
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      get(child(dbRef, 'admins')).then((snapshot) => {
        const adminIds = snapshot.val() as string[];
        const isAdmin = adminIds.includes(user.uid);

        callback({ ...user, isAdmin });
      });
    } else {
      callback(user);
    }
  });
};

export { login, logout, onUserStateChange };
