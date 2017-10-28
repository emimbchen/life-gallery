# life-gallery
Creating an interactive gallery for significant photos. 

Technologies
------------
- Angular
- Node
- Express
- css
- Heroku


Requirements
------------
- Gallery of 6 or more pictures
- On click show caption
- Users can heart a picture
- app tallys how many hearts   
- hosted on heroku

To Do:

- [x] Set up controller
- [ ] Find 6 pictures place in picture folder
- [x] Create an array with objects:
``
array = [{picture: relativeUrl, caption: captionForPic, likes: likes}];
``
- [x] ng-repeat through array and place pictures
- [x] create a ng-click that shows caption
- [x] create a like button 
- [x] add a function on click of button to add likes to objects
- [x] host on heroku

Hard Mode:
- [x] add bootstrap to style
- [x] include view counter for each clicked image

Pro Mode: 

- [x] create a form for comments on each photo
- [x] display comments for each photo
- [ ] create a show comments button
- [ ] create Post route to add new pictures (relative route)
- [ ] create get route to display new pictures ($http)