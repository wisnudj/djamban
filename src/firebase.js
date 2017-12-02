import { initializeApp } from 'firebase'
const app = initializeApp({
    apiKey: "AIzaSyBHwAUHKoTmD3ld6LMT4lqVXbFaDBQp3G4",
    authDomain: "djamban-7465a.firebaseapp.com",
    databaseURL: "https://djamban-7465a.firebaseio.com",
    projectId: "djamban-7465a",
    storageBucket: "djamban-7465a.appspot.com",
    messagingSenderId: "377811448729"
  })

export const db = app.database()
export const boardRef = db.ref('board')
