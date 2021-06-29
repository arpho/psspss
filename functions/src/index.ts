// import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import functions = require("firebase-functions");
import admin = require("firebase-admin");

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req: any, res: any) => {
    // The Firebase Admin SDK to access Firestore.
    admin.initializeApp();
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection("messages")
        .add({original: original});
    // Send back a message that we"ve successfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
});
exports.setRole = functions.https.onRequest(async (req: any, res: any) => {
    // The Firebase Admin SDK to access Firestore.
    admin.initializeApp();
    const role = req.query.role;
    const uid = req.query.uid;
    admin.auth().setCustomUserClaims(uid, {role: role});
    res.json({result:`user with uid:${uid} set with role:${role}`});
});
