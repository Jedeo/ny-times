<p align="center">
  <img width='400' alt='NY-Times logo' src='https://user-images.githubusercontent.com/16736352/212356113-1789ee12-e697-4798-aa3e-675a90d3bee0.svg'>
</p>

## Overview

This application, NY-Times, provides users with an easy way to stay informed by allowing them to interact with articles from the New York Times Top Stories API. It features a user-friendly interface with a navigation menu and filters to help users quickly find the articles that interest them. When a user clicks on an article, the application displays the article in an easy-to-read format that includes the headline, author, publication date, and a brief summary.


## Screenshots
![Untitled (1920 × 1080 px) (Website) (1500 × 768 px) (1700 × 768 px) (1900 × 768 px) (1900 × 1200 px) (1900 × 900 px) (1900 × 800 px)](https://user-images.githubusercontent.com/16736352/211704674-6a5f5af6-003a-4ef1-9e45-d9af8e6fac47.gif)
You can check out the Miro board by clicking [here](https://miro.com/app/board/uXjVPzJgJqQ=/?share_link_id=287367276505)



## Run Locally

Clone the project

```bash![Circle Initial Logo](https://user-images.githubusercontent.com/16736352/212356083-fbb9a36f-18dd-48d2-9ba9-f86d05a95854.svg)

  git clone git@github.com:Jedeo/ny-times.git
```

Go to the project directory

```bash
  cd ny-times
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY` From  [New York Times API Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)
    
## Technologies Used

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 

## Future Features
- [x] Add a user login page
- [x] Add a way for user to keep track of what articles the have already seen
- [x] Add A way for youser to go to the next article without having to visite the main page

## Dev Notes
### Wins
- [x] The application has been optimized for small screens in order to make it more user friendly
- [x] Keeping the same design on the desktop version of the application considers user experience
- [X] Make use of React's useParams hook as well as the localStorage method to help persist data when a user is on the article detail page and the user refreshes the page 

### Opportunities for growth
- [x] Utilize the Web Content Accessibility Guidelines to make the application more accessible for all users 
- [x] Make sure that your application works properly when it is used by a user by testing it with Cypress 
- [x] Utilize a GitHub project board to assist me in tracking my progress, highlighting potential areas for improvement, and keeping track of any bugs that may arise.

## Developed by:
Jedeo Manirikumwenatwe |
jedeopastor@gmail.com |
[Github](https://github.com/Jedeo) |
[LinkedIn](linkedin.com/in/jedeo) |



