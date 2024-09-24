import { getAuth, signOut } from "firebase/auth";


const auth = getAuth();

export default async function handleSignOut(){
    let result = null,
        error = null;
    result = signOut(auth).then(() => {
        console.log('Successful sign out!');
    }).catch((err) => {
        console.log('sign out not successful: '+ err.message);
        error = err
    })
    return {result, error};
}
