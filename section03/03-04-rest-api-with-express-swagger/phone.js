export function checkPhone(phoneNumber) {
    if (phoneNumber.length < 10 || phoneNumber.length > 11) {
        console.log('error!');
        return false;
    }

    return true;
}

export function getToken() {
    return String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
}

export function sendTokenToSMS(phoneNumber, token) {
    console.log(`Valid Token ${token} send to Phone ${phoneNumber}!!`);
}
