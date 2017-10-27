console.log("js in");
var myApp = angular.module('myApp',[]);
var pictures = [{picture: 'pictures/Lucy.jpg', caption: "The lovely Lucy", likes: 0, hidden: true},{picture: 'pictures/Fam.jpg', caption: "My family on vacation in Venice", likes: 0, hidden: true}, {picture: 'pictures/Morocco.jpg', caption: "Riding Camels in Morocco", likes:0, hidden: true},{picture: 'pictures/Shadow.jpg', caption: "Shadow as a goofy kitten", likes: 0, hidden: true}]
myApp.controller('mainController', function(){
    var controller = this
    controller.pictures = pictures;
    controller.showCap = function(picture){
        console.log(picture.hidden);
        picture.hidden = !picture.hidden;
        console.log(picture.hidden);
    }

});