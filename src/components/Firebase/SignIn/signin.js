import { db, auth } from "../../../fireStore"
import { collection, setDoc, doc } from 'firebase/firestore';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth"

export const SetDocSignIn = (email, phone, name, pass, path) => {

    if(phone.length === 8 && email.includes('@')) {
        setDoc(doc(collection(db, path)), {
            email: email,
            phone: phone,
            name: name,
            pass: pass
        })
    } else alert("Impormation is missing");
}