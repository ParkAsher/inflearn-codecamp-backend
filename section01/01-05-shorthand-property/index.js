function getProfile(profile) {
    console.log(profile.name);
    console.log(profile.age);
    console.log(profile.camp);
}

const name = 'asher';
const age = 28;
const camp = 'sparta';

// const profile = {
//     name,
//     age,
//     camp,
// };

// 1.
// getProfile(profile);

// 2.
getProfile({ name, age, camp });
