function checkPhone(phoneNumber) {
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        console.log('error!');
        return false;
    }

    return true;
}

function getToken() {
    return String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
}

function sendTokenToSMS(phoneNumber, token) {
    console.log(`Valid Token ${token} send to Phone ${phoneNumber}!!`);
}

function createTokenOfPhone(phoneNumber) {
    // 1.
    const isValid = checkPhone(phoneNumber);
    if (!isValid) return;

    // 2.
    const token = getToken();

    // 3.
    sendTokenToSMS(phoneNumber, token);
}

createTokenOfPhone('01012345678');
