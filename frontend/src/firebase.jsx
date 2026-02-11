import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
// OPTIONAL 
import { getAnalytics } from "firebase/analytics"; 

const firebaseConfig = { 
  apiKey: "AIzaSyAMiEw9eTgiesu45oVP1bx41bs6ds6S-oA", 
  authDomain: "scent-mode.firebaseapp.com", 
  projectId: "scent-mode", 
  storageBucket: "scent-mode.appspot.com", 
  messagingSenderId: "163552491581", 
  appId: "1:163552491581:web:a6cd941c49748e7cad5254", 
  measurementId: "G-896DNE7LTN" 
}; 

// Initialize Firebase 
const app = initializeApp(firebaseConfig); 

// 🔐 AUTH (THIS IS WHAT WE NEED) 
export const auth = getAuth(app); 

// 🗄️ DATABASE 
export const db = getFirestore(app); 

// 📊 OPTIONAL ANALYTICS 
// export const analytics = getAnalytics(app);
export const analytics = null; // Temporarily disabled to prevent network blocking issues

// 🌐 GOOGLE PROVIDER (Added for Login)
export const googleProvider = new GoogleAuthProvider();

// Configure Google Provider
googleProvider.setCustomParameters({
  prompt: 'select_account' // Always show account selection
});
