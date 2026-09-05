import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

export const GA_MEASUREMENT_ID = firebaseConfig.measurementId;

let analyticsInstance: Analytics | null = null;
let firebaseApp: FirebaseApp | null = null;
let initializationPromise: Promise<Analytics | null> | null = null;

export const initFirebase = async (): Promise<Analytics | null> => {
  if (typeof window === "undefined") {
    return null;
  }

  if (!firebaseApp) {
    firebaseApp = getApps()[0] ?? initializeApp(firebaseConfig);
  }

  if (analyticsInstance) {
    return analyticsInstance;
  }

  if (!initializationPromise) {
    initializationPromise = (async () => {
      if (await isSupported()) {
        analyticsInstance = getAnalytics(firebaseApp as FirebaseApp);
      }
      return analyticsInstance;
    })();
  }

  return initializationPromise;
};
