var Product = require('../models/product');
var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');
var products = [
    new Product({
        imagePath:'https://lh3.googleusercontent.com/BFxmJ53F1xSkJ5L963CszRklpgNdkFHqz45gF7AlqHNZq9PQbj25SmMI-AZpS2f_WpM=s360-rw',
        title:'Rage Road',
        description:'Get fun and enjoy!',
        price:10
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/W-ffWoKBBGEkpb1Rm7abYwVvfrBPuhODcmQlLmh5q4ydYl89wQr4G0u7EnnCOjB7SDI=s360-rw',
        title:'Miami Auto Theft City ',
        description:'Auto Theft City San Andreas is the new crime simulator game which allows you to roam around in the city and do exciting missions to win rewards to buy new cars and weapons.',
        price:14
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/yUx3yJhX2qC3ZReW8Qx4FiYnjAJce8qDySOdMQcYkcRQOm_RaKGf-FUG0ojiIuOR2Cg=s360-rw',
        title:'Auto Theft Crime Simulator',
        description:'Vice Auto Theft City is the new epic free roam shooting game with some of the best thrilling and exciting missions. Play as a rogue street smart thug who dreams to make it big in a city full of thugs and criminals. Experience the breathtaking action of a shooter game as you make it to the top level by eliminating mob bosses and drug lords of the street.',
        price:6
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/PcdFWpDeeUorlL8zv_XVVh5nl1CL1qhg8-LQYbENCr3AKhUs8ZLAbGiBEkJ7b_r9OM0=s360-rw',
        title:'Mutant Fighting Cup',
        description:'Get fun and enjoy!',
        price:8
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/uKg5qxfhgGOKU-sFZuBJo-bE88cmNSTyL-5a_4Dr6ynU8fh92QoN3c2UHhHavDreO0o=s360-rw',
        title:'Moto Driving School',
        description:'Moto Driving School lets you learn the skill of riding a bike. Become a master bike rider and stride across some of the most trickiest tracks which will test your abilities and increase your riding experience. Bike riding has never been this fun.',
        price:7
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/NJrplwHxqUDiB-fDwl7XH9iOuyOmZpfPcqpH4kcwvGSU288fPQyug8oT2hmBKSxa-Q=s360-rw',
        title:'Car Race-Extreme Crash',
        description:'Car Race - Extreme Crash is the most fun and entertaining high speed cars competition ever. In this game you have some of the most unique cars which can be used to ram into the opponents and destroy them.',
        price:4
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/uKg5qxfhgGOKU-sFZuBJo-bE88cmNSTyL-5a_4Dr6ynU8fh92QoN3c2UHhHavDreO0o=s360-rw',
        title:'Knock\'em All',
        description:'The most impressive game of 2020 so far!Jump from building to building and shoot the dummies to destabilize them and make them fall from the top!',
        price:15
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/5aX8ig-FT4fG5q6y3PtInFrpU4alAZoTYr9gkFWjcVDMVBsS7wRaN0XgtVn1EbwmKowk=s360-rw',
        title:'Monster Ride HD',
        description:'If you love racing games and new challenges with truck or monster ride, then monster ride . is a hot racing game in your favorite list. Ride a monster hummer and unlock new monster bikes and cars in this new racing game.',
        price:10
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/HjfpqBQyfWQnZSPnow_XyedrBv18XFYytllx69LtkuWOwa-nmtB9uj2svK9D7E9y9Cdr=s360-rw',
        title:'Johnny Trigger',
        description:'Do you have what it takes to take down the underground world of mafia?Less talk, more bullet.',
        price:5
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/utmWttVFZzPX88MAetU9ocXVTi8niCR-F6_SnTVmPDqrQQW0g_Bsohb-Apmu6BCVGiw=s360-rw',
        title:'Horse Games',
        description:'In Horse Games,Tame your wild horse through the darkness of jungle and train it to become the best stallion',
        price:7
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/wtTcT8RC7WPtXBEhLzsXnFV_7uvRmr6k405sMESQGaANX8vAU3EJdxJTbxOPf-bBpw=s360-rw',
        title:'	Real Gangsters Auto Theft',
        description:'Real Gangsters Auto Theft is crime simulation game in which the player has the chance to become a gangster and acquires a set of weapons that can be used to gain progress in the missions.',
        price:12
    }),
    new Product({
        imagePath:'https://lh3.googleusercontent.com/8tK_ICGDyfHwf2Oa8-q_VQPFrdnR8H3FSWu5RgfJrLByp_ju7MmzSRPWF-6z4tqqQEXF=s360-rw',
        title:'Shark Simulator 2018',
        description:'Shark Simulator lets you roam around in the beach and play as a mighty shark. In the start of each level, you will be given a task to complete. Make sure it is finished before you run out of time or your level will be failed',
        price:9
    }),
];


var done = 0;
for(var i =0; i<products.length; i++){
    products[i].save(function(err,result){
    done++;
    if (done === products.length){
        exitmongoose();
    }
});
}

function exitmongoose(){
    mongoose.disconnect();
}