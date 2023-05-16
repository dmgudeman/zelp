[Zelp](https://zelp1.onrender.com)

The purpose of this exercise was to recreate some of the functionalities
of Yelp. The application utilizes a Rails backend with React frontend. The styling
is css and html. I avoided using libraries to facilitate developing a better
grounding in these areas. This app took about 100hrs to make. I focussed efforts
on the searching functionality.  The search function is tripartite. It takes in
search constraints from pre-determined categories, the title of the business and also
any part of the address.  So a person if could remember that he/she saw a lumbar yard
on Lake street, the could use the 'Lumbar' category and 'Lake' in the address and 
'The Home Depot' on Lake street is yielded. 

This is a full CRUD app with capabilities to read, write, update and delete reviews. The
reviews can have custom images of your choice attached.  This functionality utilizes
the AWS S3 service to provide access to the images.  

The app integrates the Google Maps api and shows the location of the business with a 
custom pointer on the business show page. 

The carousel of images on the splash page was made out of standard html and css.

Developing the search functionality allowed me to see some of the full capabilities
of the query string when interfacing with a sql database. The utility of this allows for
creative, deterministic access to subsets of data. 
![Code Snippet](/frontend/src/assets/images/query_code_snippet.png)