// Import the tools we need from firebase-admin
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore";

// Import out credentials from a secret fire
import { credentials } from "./credentials.js";

// Connect to out firebase project
initializeApp({
    credential: cert(credentials)
});

// Connect to firestore DB
const db = getFirestore();
//^^^^^ALL CONNECTING TO FIRESTORE^^^^^

// Add a product to our product collection
// const candy2= {
//     name: "Twix",
//     price: 2.99,
//     size: "12 oz",
//     color:  "gold",
//     inventory: 288,
//     productNumber: 2,
// }

//How to add a document to Firestore:
// db.collection('products').add(candy2)
//     .then((doc) => {console.log("added doc: " + doc.id)
    
// }) 
//     .catch(err => console.log(err))

// db.collection('products')
//     .doc('AgADzrYZNeBz0eZpB5L2')
//     .delete()

// How to update a document in Firestore:

db.collection('products')
    .doc('AgADzrYZNeBz0eZpB5L2')
    .update({
        inventory: 555,
        customerFavorite: true,
    })

// How to read a document in Firestore:
db.collection('products')
    .doc('AgADzrYZNeBz0eZpB5L2')
    .get()
.then(doc => {
    console.log(doc.data())
})
.catch(console.log)

//How to get a whole collection:

db.collection('products').get()
     .then(collection => {
        const productList = collection.docs.map(doc => ({...doc.data(), id: doc.id }))
        console.table(productList)
     })
     .catch(console.log)