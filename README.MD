Welcome to the new Plum Run HOA website.

This site is intended to provide information for lot owners and residents
of the Plum Run neighborhood located in Sellersburg, IN.

Included to be included on the site are the following:

1. A brief introductory about the neighborhood and its history.
2. A current list of Board Members.
3. A list of documents available such as the Covenants and Restrictions.
4. A link to the neighborhood's social media site.
5. A list of import web links for local government and utilities.
6. A contact form.

The menu button and the contact form include JavaScript. The site is nowhere
near where I intended it to be when I began and is in fact my 2nd version.
The main page text content will be minimal as the majority of action will eventually
be driven from the documents page and the contact form. As a result, no CSS has been
coded for the content in each of the pages until I am able to discern exactly what
the board is looking for.

A very special thank you goes out to Joey for helping me with the responsive
design issues I was having. He's an asset to your mentoring team!

CSS:
Minimal styling for several reasons:
-focused on my JS and getting the site to be responsive.
-lack of content at this time (I've consulted with the board and they are
   working to get me the information I need to finish things like adding picture
   [yes I know about placeholders... timing was an issue there] and neighborhood history, etc.)
-timing: I underestimated the time it would take to design the site to my initial
   vision... #fail

JS:
-I created a dropdown button when the screen is below 740px (located in scriptV2.js)
-I created a contact form which validates the email address (located in contact.js)
   -It was also originally supposed to send the contact content to the HOA email
      address, but I couldn't get that fucntionality to work properly without it
      negatively impacted some of the previous JS.
   -Additionally, there are two JS files since the form function only need to run
      on one page while the button functions run on every page. I believe one of
      the mentors (likely Joey) suggested this while we were working through some
      JS bugs on the form itself and since the site is small, not public, and
      running through my machine rather than a server. 
