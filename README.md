# NPM Package: @yaronkoresh/bundler

### Code bundler:

* Currently supports C/C++ only

# Example:

```

const Bundler = require("@yaronkoresh/bundler");

const inputFile = "main.c";
const outputFile = "bundle.c";
const directory = "C:/Users/User/Documents"

Bundler.using(inputFile,outputFile,directory);

```

### Enjoy!