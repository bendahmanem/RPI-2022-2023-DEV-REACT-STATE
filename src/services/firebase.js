import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
      apiKey: "AIzaSyCbTBN1De8MkydL477PoIg_13DR7lua0SY",
      authDomain: "fir-demo-b3584.firebaseapp.com",
      databaseURL: "https://fir-demo-b3584.firebaseio.com",
      projectId: "fir-demo-b3584",
      storageBucket: "fir-demo-b3584.appspot.com",
      messagingSenderId: "114920552217",
      appId: "1:114920552217:web:713bf97fcf0fd008613788",
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
