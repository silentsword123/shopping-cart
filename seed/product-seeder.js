var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost: 27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/96/I_am_legend_OST.jpg',
        title: 'I am legend',
        description: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
        price: 10
    }),
    new Product({
        imagePath: 'http://1.bp.blogspot.com/-qctHXq1sUrk/VoD13x5ACBI/AAAAAAAAKHE/vLumu4SnkwA/s1600/once-upon-a-time-in-america.jpg',
        title: 'Once Upon A Time In America',
        description: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
        price: 20
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_(2010)_theatrical_poster.jpg',
        title: 'Inception',
        description: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
        price: 15
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/94/Transformers_Age_of_Extinction_Poster.jpeg',
        title: 'Transformers: Age of Extinction',
        description: 'Autobots must escape sight from a bounty hunter who has taken control of the human serendipity: Unexpectedly, Optimus Prime and his remaining gang turn to a mechanic, his daughter, and her back street racing boyfriend for help.',
        price: 18
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg',
        title: 'The Pursuit of Happiness',
        description: 'A struggling salesman takes custody of his son as he‘s poised to begin a life-changing professional endeavor.',
        price: 15
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}