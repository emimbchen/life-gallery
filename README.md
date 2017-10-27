# life-gallery

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

- [ ] Set up controller
- [ ] Find 6 pictures place in picture folder
- [ ] Create an array with objects:
``
array = [{picture: relativeUrl, caption: captionForPic, likes: likes}];
``
- [ ] ng-repeat through array and place pictures
- [ ] create a ng-click that shows caption
- [ ] create a like button 
- [ ] add a function on click of button to add likes to objects
- [ ] host on heroku

Hard Mode:
- [ ] add bootstrap to style
- [ ] include view counter for each clicked image

Pro Mode: 

- [ ] create a form for comments on each photo
- [ ] display comments for each photo
- [ ] create a show comments button
- [ ] create Post route to add new pictures (relative route)
- [ ] create get route to display new pictures ($http)