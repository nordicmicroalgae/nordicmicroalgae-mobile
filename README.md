## Overview

Mobile application for Nordic Microalgae built with [AngularJS](https://angularjs.org/), [jQuery](http://jquery.com/)
and [Bootstrap](http://getbootstrap.com/).

Available at http://m.nordicmicroalgae.org/

## Development

[Node.js](http://nodejs.org/) and [Grunt](http://gruntjs.com/) (task runner for Node.js) are required for certain
tasks, such as:
 - Generate an optimized and production ready version of the app
 - Run a local development server, quick and easy without any configuration
 - etc

Visit http://nodejs.org/ for more information on how to install Node.js on your
system.

Use npm (the package manager for Node.js) to install the Grunt CLI globally:

```
npm install -g grunt-cli
```

Go to the project directory and install local dependencies:

```
cd mobileapp
npm install
```

To run a local development server, the server task may be used:

```
grunt server
```

In order to generate an optimized and production ready version of the app, run
the default grunt task:

```
grunt
```

The generated version will end up in the 'dist' directory.
