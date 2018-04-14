# First Class

### topics
- What are web apps and where did they come from?
- the html and css we need to make web apps
- the javascript we need to make web apps
- other stuff we need to make web apps

#### What are web apps and where did they come from

The first websites did not take any input from the user. You could not sign in,
and the page did not change as you interacted with it. The most you could do was
link to another website, hence the "web" part.

You could get to a website by going to a server address, and that server would
send back to you the html for that page. Pages started to get more complicated
by linking to pages that the original server knows about, hence navigating to
different pages on one website, by clicking items in the navbar for example.

Javascript was added to web browsers, and within the html a server sent to you,
it could add javascript and have that javascript run under certain conditions.
The javascript might run after a button is clicked, and add html to the page.
This made it so it seemed like users could dynamically change pages as they
interacted with them. 

Websites then started to care about who the user of the website it. They want to
know this so it can show you things that only apply to you, your shopping cart,
or your friends, etc. 

Through cookies we accomplish this, and the server can, when rendering a
particular page, lookup information from a database and inject that into the
html it sends back.

This idea of server side creation of html pages was popular for a while, but
soon a pattern emerged of relying more on the client to do the work. But, in
order for the client to have the data from the database that is specific to a
particular user, we have to send that in some format, and that is where json
comes in, and ajax requests. 

So what is a web app? A web app is any suitably complex website. One can become
complex by:
- requiring a login and making the site different per user
- interacting with a server to get data when it is needed
- rednering data on the fly in a table, visualizing it in chart, putting data
  on a map
- taking form input from a user and sending that to the server

Obviously I'm making those things up, but the idea is that web apps do a lot
more than just what a normal website does, and so we need better frameworks to
handle this complicated logic that is now handled in the browser

#### the html and css we need

Here we don't need anything super advanced, by using a good component library,
we just need to know basic css for styling those things and positioning them the
way we want.

#### the javascript we need

We are using React.js to build our web apps, and to use react the way most
people use it we need to know a few things from one of the newer versions of
javascript, es6, namely:

- classes
- arrow functions
- template strings

#### other stuff we need

- HTTP & REST
- JSON
- AJAX
