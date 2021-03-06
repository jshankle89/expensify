import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //appId: "1:752736570991:web:81d13c2a01f88ae4"
  };

  firebase.initializeApp(config);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default};

//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//-------------------------------------------------------------------------------------

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

//     database.ref('expenses')
//         .on('value', (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             })
//         console.log(expenses);
//     });

//-------------------------------------------------------------------------------------
//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React and Python'
//   });

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

//-------------------------------------------------------------------------------------
//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => { 
//       console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 5500);

//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 7500);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);

//-------------------------------------------------------------------------------------

//   database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });


//   database.ref().set({
//       name: 'Justin Shankle',
//       age: 29,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Fishers',
//           country: 'USA'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed', e);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
//   });



//   database.ref().update({
//     job: 'Manager',
//     'location/city': 'Carmel'
//   });

//   database.ref('location/city').set('Paducah');

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Data was not removed');
//     });
