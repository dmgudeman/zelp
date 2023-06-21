[See Zelp live](https://zelp1.onrender.com)

![ScreenShot](/frontend/src/assets/ScreenshotApp.png)
<div>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/ruby/ruby-original.svg" title="Ruby" alt="Ruby " width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/rails/rails-original-wordmark.svg" title="Rails" alt="Rails " width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" title="AWS" alt="AWS" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg" title="postgres" alt="postgres" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/google/google-original.svg" title="google" alt="google" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
</div>

<!-- [![GitHub Streak](http://github-readme-streak-stats.herokuapp.com?user=dmgudeman)](https://git.io/streak-stats) -->
[![GitHub Streak](http://github-readme-streak-stats.herokuapp.com?user=dmgudeman&exclude_days=Sun%2CSat)](https://git.io/streak-stats)


The app allows the user to find businesses through an advanced search implementation. 
The application utilizes a Rails backend with React frontend written in Typescript. The styling
is css and html. The search function is tripartite. It takes in
search constraints from pre-determined categories, the title of the business and also
any part of the address.  So a person if could remember that he/she saw a lumbar yard
on Lake street, the could use the 'Lumber' category and 'Lake' in the address and 
'The Home Depot' on Lake street is yielded. 

<div style="display: flex; flex-direction: column; align-items: flex-start;"> 
   <img src='/frontend/src/assets/searchBar.png' alt="rootReducer" width="700" >
   <img src='/frontend/src/assets/searchBarActive.png' alt="rootReducer" width="700" >
   <img src='/frontend/src/assets/searchSnippet.png' alt="rootReducer" width="700" >
</div>

I wrote a large part of the app in Javascript prior to converting to Typescript. The static 
typing of typescript allowed me to identify issues that were not identified before such as the
rating for the business was not being updated. In general it made me disciplined about thinking
what for the data was in all aspects of the codebase.  I rewrote the redux store with Redux Toolkit
and the proved to be insctructive of the advanced abstraction of the action creators that the 
library provides.


<div style="display:flex; align-items: flex-start;"> 
   <img src='/frontend/src/assets/reduxReducer.png' alt="rootReducer" width="400" style="margin-right: 20px">
   <img src='/frontend/src/assets/toolKitSlice.png' alt="rootReducer" width="400" style="margin-left: 10px">
</div>

This is a full CRUD app with capabilities to read, write, update and delete reviews. Authorization
is implemented with user feedback The reviews can have custom images of your choice attached.  
This functionality utilizes the AWS S3 service to store uploaded images. The reviews, including the attached 
photos may be updated or deleted by the user who authored them. The reviews for the business
can be seen by anyone who is signed in. 

Custom modals controlled through redux are used for Login, Signup, review create, review edit and review show.

The rails backend was very nice to use and when I needed to change the shape of the database, even late
in implementation was made very facile with rails migrations. JBuilder allowed the shape of the
data being sent to the front end to be malleable. The handoff of data between the frontend and backend
is another area that the discipline of Typescript is welcomed.

Full user authorization functionality, with communication to the user of missing data, 
is implemented. The Demo User button is to facilitate showing the site.

The app integrates the Google Maps api and shows the location of the business with a 
custom pointer on the business show page. 

The carousel of images on the splash page was made out of standard html and css. This preloads
the images and provides a spinner to avoid unintended styling being shown.

Converting a significant codebase to Typescript was enormously instructive and built confidence
in codebase design and debugging. Developing the search functionality allowed me to see some of the full capabilities
of the query string when interfacing with a sql database. The utility of this allows for
creative, deterministic access to subsets of data. Implementing the search bar from scratch
allowed me to explore challenges of utilizing the input element for inputing partial data 
as well as updating from a predetermined list.  During its construction I explored useRef and
useMemo hooks.  I implemented a custom hook to hide the drop down when the user defocusses 
from the input.

