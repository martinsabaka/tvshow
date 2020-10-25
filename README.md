# tv-show

This is a project using open API from http://www.tvmaze.com/api.

Application lists TV shows, supports filtering based on TV show genres and sorting based on show average rating.
User can also search for TV show based on show's name. Project is developed using Vue framework.

Project has 3 views with distinct routes:
PopularShows - list of shows based on selected filter
PopularShowDetails - detail of a selected show
DefaultError - default error screen
These pages are located in `views` folder.

There is also a `component` folder wich includes reusable components used in previously mentioned views:
Header - generic header component which is displayed in all pages of the app
ShowDetail - used in PopularShows view to display sinle show with basic details about it
Spinner - generic loading spinner used while API call is in progress

For Routing application uses Vue router.
For API calls application uses Axios.

Application uses Vuex for handling API calls and state of loading. Vuex store is located in `store` folder.

Vue version `2.6.11`
Vue CLI version `4.5.8`

Unit tests are made using Jest.

Namming conventions:
Views/Components - CamelCase,
Methods - lower camelCase,
Test .js file names - lower camelCase

Lint was set to Standard

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Run unit tests

```
npm run test
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
