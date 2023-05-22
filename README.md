[See Zelp live](https://zelp1.onrender.com)

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) HTML5
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) CSS3
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) JavaScript
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) React

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/java/java-original-wordmark.svg" title="Java" alt="Java" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/firebase/firebase-plain-wordmark.svg" title="Firebase" alt="Firebase" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL"  alt="MySQL" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="AWS" alt="AWS" width="40" height="40"/>&nbsp;
</div>


The app allows the user to find businesses through an advanced search implementation. 
The application utilizes a Rails backend with React frontend. The styling
is css and html. I avoided using libraries to facilitate developing a better
grounding in these areas. This app took about 100hrs to make. I focussed efforts
on the searching functionality.  The search function is tripartite. It takes in
search constraints from pre-determined categories, the title of the business and also
any part of the address.  So a person if could remember that he/she saw a lumbar yard
on Lake street, the could use the 'Lumbar' category and 'Lake' in the address and 
'The Home Depot' on Lake street is yielded. 

This is a full CRUD app with capabilities to read, write, update and delete reviews. The
reviews can have custom images of your choice attached.  This functionality utilizes
the AWS S3 service to provide access to the images. The reviews, including the attached 
photos may be updated or deleted by the user who authored them. The reviews for the business
can be seen by anyone who is signed in. 

Full user authorization functionality, with communication to the user of missing data, 
is implemented. Demo User button is to facilitate showing the site.

The app integrates the Google Maps api and shows the location of the business with a 
custom pointer on the business show page. 

The carousel of images on the splash page was made out of standard html and css.

Developing the search functionality allowed me to see some of the full capabilities
of the query string when interfacing with a sql database. The utility of this allows for
creative, deterministic access to subsets of data. 
![Code Snippet](/frontend/src/assets/searchSnippet.png)
