
var myApp = angular.module('myApp',[]);
var pictures = "";
myApp.controller('mainController', function ($http) {
    var controller = this
    refreshPictures();
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
        picture.comments.push(picture.comment);
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
        controller.url = "";
        controller.caption = "";
        addPicture();
    }

    function refreshPictures() {
        $http.get('/pictures').then(function (response) {
            pictures = response.data;
            console.log(pictures);
            controller.pictures = pictures;
        })
    }

    function addPicture(newPic){
        $http.post('/pictures', newPic).then(function(response){
            console.log('Success :)');
            refreshPictures();
        }).catch(function(error){
            console.log('Fail :(');
        });
    }

});
