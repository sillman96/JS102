//Use this file to implement Part One of your project


var animal = {};

animal.username = "MrSheep";

animal['tagline'] = "I'm here.";

var noises = [];

animal.noises = noises;

var count = 0;

//for(var key in animal){
//    count++; //this will determine the number of properties in our object
//    if (key === 'username'){
//        console.log('Hi my name is ' + animal[key]);
//    } else if (key === 'tagline'){
//        console.log('I like to say ' + animal[key]);
//    }
//}

var noiseArray = ['purr', 'oink'];

noiseArray.unshift('hiss');
noiseArray.push('meow');

noiseArray[3] = "growl";

animal.noises = noiseArray;

var animals = [];

animals.push(animal);

var quackers = {username: 'DaffyDuck', tagline: 'Yippee!', noises: ['quack', 'honk', 'sneeze', 'growl']}

animals[animals.length] = quackers;

var dog = {
    username: 'Kabosu',
    tagline: 'Such profile',
    noises: ['bark', 'woof', 'wow!']
}

var honeyBadger = {};

honeyBadger.username = 'Randall';
honeyBadger.tagline = 'Honey badger dont care'
honeyBadger.noises = ['screech', 'growl'];

animals.push(dog, honeyBadger);


function AnimalMaker(name) {
    return{
        speak: function(){
            console.log('My name is ' + name);
        },
        name: name,
        owner: 'Shawn'
    }
}

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

for(var i = 0; i < animalNames.length; i++){
    farm.push(AnimalMaker(animalNames[i]));
}

//for(var i = 0; i < farm.length; i++){
//    farm[i].speak();
//}

//exercises: github.com/bgando/function-exercises.

var AnimalTest = function(username){
    return {
        username: username
    }
}

var myCow = AnimalTest('Bessie');

function AnimalTestUser(username){
    var argLength = arguments.length;
    var otherArgs = [];
    if(argLength > 1) {
        for(i=0; i < argLength; i++){
            otherArgs.push(arguments[i])
        }
    }
    return {
        username: username,
        otherArgs: otherArgs
    }
};

//option 1
function AnimalCreator(username, species, tagline, noises){
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    };
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baah', 'arggh', 'chewchewchew']);

function addFriend(animal, friend) {
    animal.friends.push(friend);
}

var cow = AnimalCreator('Moo', 'cow', 'got milk?', ['mooo', 'more moooo']);

var llama = AnimalCreator('Zeny', 'llama', 'lllll', ['lamalamalama', 'whaaaaat']);

addFriend(cow, llama);

addFriend(sheep, cow);

addFriend(sheep, llama);

var myFarm = [sheep, cow, llama]; //myFarm is an array, not an object


function addMatchesArray(farm) {
    for(var animal in farm) {
        farm[animal].matches = []; //here you're adding an array called matches.
    }
}

function addMatchesArray(farm) {
    for(i=0; i < farm.length; i++) {
        farm[i].matches = []; //here you're adding an array called matches.
    }
}


function giveMatches(farm) {
    for (var animal in farm) {
        farm[animal].matches.push(farm[animal].friends[0]);
    }
}

addMatchesArray(myFarm);

giveMatches(myFarm);
console.log(myFarm[0])













