Individual Value & Stat Calculator
===================================

:warning: If you came to this page by mistake and you only want to use the calculator, [click here!](https://legendarypkmn.github.io/ivcalcsm.html)

This tool was originally written by [Heracles Papatheodorou a.k.a Arty2](http://www.twitter.com/Arty2), webmaster of [LegendaryPKMN](http://www.legendarypkmn.net/), and is now maintained collaboratively on [GitHub](https://github.com/LegendaryPKMN/ivcalc/graphs/contributors).

I just wanted it to be easy to use on my phone. In the process I organized some of the original code for the calculations and remade the web interface.

## Setup & Requirements
Make sure you have Node.js and npm installed on your system. Then make sure to run 'npm install' in the project directory.

## Building
Execute the following commands in project directory terminal:
    npm run build
    npm run pack

Then after execution there will be a file index.html inside the /dist folder. That is the entire website.

## Testing
Running a development version of the webpage can be done with:

    npm run dev

This will automatically build all html, javascript and scss styling as the files inside "./src" are modified. 
The page will be available on the local network. More info regarding that is in the terminal when script is run.

## Developing
I developed this project with a simple pipeline in mind to get a single static webpage.

. Write styling in scss files and combine it into a single css file.
. Organize our javascript in different files that are imported into a single js file.
. Use html modules to separate and structure the page elements and then combined them into a single html file.

Finally the css file and js file is injected into the html file to complete the single file static website.

The configuration of the project and its scripts are all setup to make this mostly automatically.
Use the following rules when developing and working in the project.

## SCSS
. Work inside the 'src/scss' directory.
. Don't use vendor-prefixes, autoprefixer will do the job when we build and pack the website.
. Scss files other than 'index.scss' must use an underscore prefix (_) so they are ignored by our sass task.
. All scss files needs to be imported in the 'index.scss' in order of dependency.
    ex: anything that needs variables.scss must be imported after variables.scss.

## Javascript
. Work inside the 'src/js' directory.
. For js files other than 'main.js' to be processed in the build, they need to be imported in the 'main.js' file.

## HTML
. Work inside the 'src/html' directory.
. Make sure that the '<link href="PACK.INJECT.STYLING">' element is the last child of the header in 'index.html'.
. Make sure that the '<link href="PACK.INJECT.SCRIPTS">' element is the last child of the body in 'index.html'.