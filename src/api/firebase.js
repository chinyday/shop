// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    }).catch((error) => {
      console.log(error);
    });
}

export async function logout() {
  return signOut(auth).then(() => null);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await isAdminUser(user) : null;
    callback(updatedUser);
  });
}

async function isAdminUser(user) {
  return get(ref(db, 'admins')).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin }
    }
    return { ...user }
  });
}

// 제품 등록
export async function addNewProduct(product, imgUrl) {
  const id = uuid();
  return set(ref(db, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imgUrl,
    options: product.options.split(','),
  })
}

// 상품 가져오기
export async function getProducts() {
  return get(ref(db, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

// 장바구니 가져오기
export async function getCart(userId) {
  return get(ref(db, `carts/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const items = snapshot.val() || {};
      return Object.values(items);
    }
  });
}


export async function addOrUpdateToCart(product, userId) {
  return set(ref(db, `carts/${userId}/${product.id}`), product);
}

export async function removeOrUpdateToCart(productId, userId) {
  return remove(ref(db, `carts/${userId}/${productId}`));
}