console.log("js in");
var myApp = angular.module('myApp',[]);
var pictures = [{ picture: 'pictures/India.jpg', caption: "Blake and I at the Taj Mahal", likes: 0, hidden: true, comments: [], }, { picture: 'pictures/Lucy.jpg', caption: "The lovely Lucy", likes: 0, hidden: true, comments: [] }, { picture: 'pictures/Fam.jpg', caption: "My family on vacation in Venice", likes: 0, hidden: true, comments: [] }, { picture: 'pictures/Morocco.jpg', caption: "Riding Camels in Morocco", likes: 0, hidden: true, comments: [] }, { picture: 'pictures/Shadow.jpg', caption: "Shadow as a goofy kitten", likes: 0, hidden: true, comments: []}, {picture: 'pictures/jellyfish.jpg', caption: "I love the Omaha Zoo", likes: 0, hidden: true, comments: []}]
myApp.controller('mainController', function(){
    var controller = this
    controller.pictures = pictures;
    controller.showCap = function(picture){
        console.log(picture.hidden);
        picture.hidden = !picture.hidden;
        console.log(picture.hidden);
    }
    controller.likePhoto = function(picture){
        picture.likes = picture.likes + 1;
    }
    controller.addComment = function(picture){
        //picture.comment is what I want to push
        picture.comments.push(picture.comment)
        picture.comment='';
    }
    controller.newPic = function (url, caption) {
        var newPic = {
            picture: url,
            caption: caption,
            likes: 0,
            hidden: true,
            comments: []
        };
        pictures.push(newPic);
        controller.url = "";
        controller.caption = "";
    }
});