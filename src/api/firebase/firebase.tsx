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
import { MyUser } from './types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);
const dbRef = ref(database);

const login = async () => {
  signInWithPopup(auth, provider).catch(console.error);
};

const logout = async () => {
  signOut(auth).catch(console.error);
};

const adminUser = async (user: User): Promise<MyUser> => {
  const snapshot = await get(child(dbRef, 'admins'));
  let isAdmin = false;

  if (snapshot.exists()) {
    const adminIds = snapshot.val() as string[];
    isAdmin = adminIds.includes(user.uid);
  }
  return { ...user, isAdmin };
};

const onUserStateChange = (callback: (user: MyUser | null) => void) => {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
};

export { login, logout, onUserStateChange };
