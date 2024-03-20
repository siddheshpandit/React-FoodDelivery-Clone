## Notes

# What is Carrot(^) vs Tilde(~)?
Using tilde ( ~ ) gives you bug-fix releases, while caret ( ^ ) in addition gives you backward-compatible new functionality.
~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

# Package.json vs package-lock.json
Package.json is a file which contains information about dependency management and project configuration.
Package-lock.json is a lockfile that holds information on the dependencies or packages installed for a node js project, including their exact version numbers.

# Node Modules
Node modules is collection of dependencies needed by the project.

# Npx vs Npm
Npm is package manager used for installing packages into project.
Npx is used to execute packages without installing them locally or globally.

# Parcel
What is parcel
Parcel is a bundler similar to webpack.
It is designed to simplify the process of building modern web applications by providing zero config setup, faster performance and support for various web technologies.

