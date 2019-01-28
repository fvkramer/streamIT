# README


# Description and Goals

StreamIT is a FullStack application clone of Youtube. All seeding data is hosted through Amazon Web Services and the app infrastructure is built on a Rails/Postgres backend with React/Redux frontend. 

The application runs on 

`ruby '2.5.3'`

To get started:

`git clone https://github.com/fvkramer/streamIT.git`

To install all dependencies:

`bundle install`
`npm install`

To run the migrations and seed the databse:

`bundle exec rails db:reset`

This will clear existing data and seed based on a weighting mechanism for preferred videos.

To run the application:

`npm run webpack`

`bundle exec rails server`

The site should be live on localhost. Check the port number in your terminal.

