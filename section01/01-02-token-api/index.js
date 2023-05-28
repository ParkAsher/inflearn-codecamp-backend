// Bad
// function createTokenOfPhone(phoneNumber) {
//     if (phoneNumber.length >= 10) {
//         // 1.
//         if (phoneNumber.length <= 11) {
//             // 2. make code
//             const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
//             console.log('code : ', result);
//             // 3. send to phone
//         } else {
//             console.log('error!');
//         }
//     } else {
//         console.log('error!');
//     }
// }

// Good
function createTokenOfPhone(phoneNumber) {
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        console.log('error!');
        return;
    }

    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    console.log('code : ', result);
}

createTokenOfPhone('01012345678'); // argument
