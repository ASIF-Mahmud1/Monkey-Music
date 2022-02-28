import firebase from '../../../database/firebase';

const signUp = async ({ email, password }) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const token = await response.user.getIdToken(); // getIdToken is a method of user
        if (!response.error) {
            return {
                message: 'User Successfully Added!',
                token: token
            }
        }
        else {
            return response.status(500).json({
                message: 'Something went wrong, Please try again later'
            })
        }
    } catch (error) {
        return {
            error: error,
            message: 'Something went wrong, Please try again later'
        }
    }

}

const signIn = async ({ email, password }) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        const token = await response.user.getIdToken(); // getIdToken is a method of user
        if (!response.error) {
            return {
                message: 'User Successfully Added!',
                token: token
            }
        }

    } catch (error) {
        return {
            error: error,
            message: 'Something went wrong, Please try again later'
        }
    }
}

export {
    signUp,
    signIn
}