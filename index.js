// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca


// attribute first user
const favoriteColorFirstUser = ['Yellow', 'Pink', 'White', 'Purple']
const educationFirstUser = [
    { name: 'SD 01', city: ' Jakarta', graduate: 2016 },
    { name: 'SMP 02', city: 'Jakarta', graduate: 2019 },
    { name: 'SMA 03', city: 'Tangerang' }
]

const favoriteRestaurantFirstUser = new Set()
favoriteRestaurantFirstUser.add('Bento')
favoriteRestaurantFirstUser.add('Sushi')
favoriteRestaurantFirstUser.add('Pancake')
favoriteRestaurantFirstUser.add('Eggy')
favoriteRestaurantFirstUser.add('Tempura')
favoriteRestaurantFirstUser.add('Bento')
favoriteRestaurantFirstUser.add('Eggy')
favoriteRestaurantFirstUser.add('Padang')
favoriteRestaurantFirstUser.add('Tteok')
favoriteRestaurantFirstUser.add('Sushi')
favoriteRestaurantFirstUser.add('Sushi')
let favoriteRestaurantFirstUserHasFilter = []
for (let item of favoriteRestaurantFirstUser) {
    favoriteRestaurantFirstUserHasFilter.push(item)
}




// attribute second user    
const favoriteColorSecondUser = ['Blue', 'Black', 'Grey']
const educationSecondUser = [
    { name: 'SD 02', city: 'Jakarta', graduate: 2010 },
    { name: 'SMP 03', city: 'Bogor', graduate: 2013 },
    { name: 'SMA 01', city: 'Surabaya', graduate: 2016 },
    { name: 'Universitas Maju', city: 'Tangerang' }
]
const favoriteRestaurantSecondtUser = new Set()
favoriteRestaurantSecondtUser.add('Tempura')
favoriteRestaurantSecondtUser.add('Bento')
favoriteRestaurantSecondtUser.add('Sushi')
favoriteRestaurantSecondtUser.add('Pancake')
favoriteRestaurantSecondtUser.add('Padang')
favoriteRestaurantSecondtUser.add('Katsu')
favoriteRestaurantSecondtUser.add('Geprek')
favoriteRestaurantSecondtUser.add('Pancake')
favoriteRestaurantSecondtUser.add('Eggy')
let favoriteRestaurantSecondtUserHasFilter = []
for (let item of favoriteRestaurantSecondtUser) {
    favoriteRestaurantSecondtUserHasFilter.push(item)
}

const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: favoriteColorFirstUser,
    isHavePet: 'Yes',
    education: educationFirstUser,
    favoriteRestaurant: favoriteRestaurantFirstUserHasFilter
};
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: favoriteColorSecondUser,
    isHavePet: 'No',
    education: educationSecondUser,
    favoriteRestaurant: favoriteRestaurantSecondtUserHasFilter
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};