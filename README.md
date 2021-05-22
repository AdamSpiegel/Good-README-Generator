
  # **Professional README.md Generator**
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

  ## Table of Contents
   1. [Description](#description)
   2. [Installation](#installation)
   3. [Project Usage](#Project-Usage)
   4. [License Information](#License-Information)
   5. [Contributors](#Project-Contributors)
   6. [Testing Instructions](#Testing-Instructions )
   7. [Contact Info](#Questions)
   
  ## Description
  This is a professional README.md file generator.  Utilizing Node.js and your command line, you are able to follow command prompts, which guides the user to a template to utilize for your README.md file (to be included in all future projects.) 

  ## Installation
  The installation for this application included utilizing the starter code which was provided at the start of our project.  The follow steps had to be implemented in order to make this generator functional:

  * Inquirer and FS file packages had to be installed intially fot the beginning of our index.js file. A custom package.json was also included.
  * We also had to include our generateMarkdown function in order to call the file
  * The array of questions was then created including the questions to be prompted to the user (type, message, and name) which utilizes inquirer also, to generate to the Markdown file.
  * writeToFile and init() functions were then built out to helo console log/write the user's input, in addition to beginning the prompts themselves.
  * The generateMardown.js starter code was then built out.  This included:
    * Creating let(s) for all licenses badges and license descriptions
    * renderLicenseBadge fucntions were built to utilizing the "switch" to grab badge license info, in addition to seperating for rendering license badge descriptions
    * generateMarkdown function was last to be built out, to pull in user submitted data, and outlining the actual README.md file as well
    * Table of Contents reflects a professional README layout, and section links anchor to appropriate section in document
    * Gmail and Github links reflect professional icons, while attaching user submitted Github name and email address.
  * module.exports = generateMarkdown function at base of file is utilizing modularization to link to index.js file and produce README.md file 

  ## Project Usage 
  An time saver for busy programmers, this README.md generator can be utilzed through Node.js.  Through your command line, you follow a series of questions, which guides you and outlines a README.md file for you.  It can be built out further, but includes a standard Table of Contents with all appropriate guidelines to be included.  Further development will still be in place, in order to maximize the layout functionality options which are available. - 5.22.21

  ## License Information
  The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.

  ## Project Contributors 
  Adam Spiegel

  ## Testing Instructions 
  Please follow instructions below to test generator functionality:
  1) Open terminal in provided folder (local for this example)
  2) run node index.js
  3) Follow instruction prompts.  You will be asked all questions as pertains to the layout of the README.md file.
  4) Please note - you will have to arrow up or down to select your license.
  5) If successful, the command line with generate your README.md file, you will be notified of a "Success" and it will be saved to your local file, available for immediate use and being entirely editable as well.
  
  ## Questions?
  ### Please find my contact information below to reach out! 

  [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:adamspiegel23@gmail.com)  [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdamSpiegel)  

  