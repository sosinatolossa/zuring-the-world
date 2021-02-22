# Zurīng the World
Zurīng the World is intended to make having a journal of trips taken easy--- allowing the user to see notes of all of their traveling experiences, other travelers notes, and save a list of future trips. Zurīng the World provides easy access to users to capture all of the cool things they do during their trips and moments they feel during these times. Along with this, they can also get their research done on future trips they want to take because this site will allow them read other travelers notes on trips they've taken. And if they like what they're seeing(reading) about these trips, they can easily save the name of the cities under their future trips list with one click of a button.

## Table of Contents
  * [Project Requirements and Features List](#project-requirements-and-features-list)
  * [Technologies Used](#technologies-used)
  * [Installing and Launching Zurīng the World](#instructions-for-installing-zurīng-the-world)
  * [Appendix 1: Planning Documentation](#appendix-1-planning-documentation)
    * [Entity Relationship Diagrams](#entity-relationship-diagram)
    * [Wireframes](#wireframes)
  * [Appendix 2: Set Up Instructions](#appendix-2-set-up-instructions)

## Project Requirements and Features List
### Get Started
When a user first registers an account with Zurīng the World, they will be taken a page with a section on the left where they add notes of trips they've taken, section on the right where they can see other travelers notes, and a section on bottom of the page where they can save future trips. 
<br>
<img src="./src/components/images/Zurīng-the-World-freshPage.png" width="50%"></img>
<img src="./src/components/images/Zurīng-the-World-freshPageBottom.png" width="50%"></img>

### Adding Notes
When the user wants to add a note on a trip they've taken, they will click 'Add a new travel note button' located on top left corner. They then will be presented with a form that asks general questions about their trip. They then will fill out all of the required information otherwise they will not be able to save the note. Once they fill out all of the required information, they can click 'Add note' button located on the bottom of the form and the note will be saved. 

### Editing Notes
If a user wants to edit one of their trip note for any reason, they can click 'Edit' button under the note they want to edit. When they do that, a form they've filled out in order to save that note will get displayed. They then can edit any one of those saved information including replacing the picture they've used for this note when they were adding it and click 'Save' and the note will get updated.

### Viewing Other Travelers Notes and Saving Future Trips
When a user want to read about other cities, they will just have to look at the right page. There, they can find different travelers and notes on cities these travelers visited. If the user reads these notes and feel like it will be nice to visit one of the cities, they can click 'Save' button under the city they're interested on visiting, and that city's name will be added under their 'Future trips' list located on the bottom of the page.


## Technologies Used
  ### Development Languages and Libraries
  <img src="./src/components/images/react-logo.png" width="10%"></img> 
  <img src="./src/components/images/css3-logo.png" width="10%"></img>
  <img src="./src/components/images/cloudinary-logo.png" width="10%"></img> 
  <img src="./src/components/images/react-bootstrap-logo.png" width="10%"></img> 

  ### Development Tools
  <img src="./src/components/images/github-logo.png" width="10%"></img>
  <img src="./src/components/images/dbdiagramio-logo.png" width="7%"></img>
  <img src="./src/components/images/figma-logo.png" width="10%"></img> 
  <img src="./src/components/images/git-logo.png" width="10%"></img> 
  <img src="./src/components/images/vscode-logo.png" width="10%"></img>
 
## Instructions for Installing Simplified Supper
  To launch the Zurīng the World app, you will need to have access to command line tools, node package manager, JSON Server. If you do not have access to any of these tools, you can find instructions for installing them in the [Appendix.](#appendix-2-set-up-instructions)

  Clone this repo on you personal machine using the following command
  ```sh
    git clone git@github.com:sosinatolossa/zuring-the-world.git
  ```

  Install the NPM dependencies for this project using the following commands
  ```sh
    cd zuring-the-world
    npm install
  ```

  From your terminal window, type
  ```sh
    npm start
  ```

  Now that the server is up and running, you can open an internet browser and access the application
  ```sh
    http://localhost:8080/
  ```

 ### Congratulations you are now experiencing Zurīng the World!

  ## Appendix 1: Planning Documentation

  ### Entity Relationship Diagram
  ![Zurīng the World ERD](./src/components/images/Zurīng-the-World-ERD.png)

  ### Wireframes/ Mockups
  <img src="./src/components/images/wireframe1.png" width="45%"></img> <img src="./src/components/images/wireframe2.png" width="45%"></img>
  <img src="./src/components/images/wireframe3.png" width="35%"></img> <img src="./src/components/images/wireframe4.png" width="35%"></img>
