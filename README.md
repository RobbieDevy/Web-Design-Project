# Three Rock Kenpo Website

A website I built for Three Rock Kenpo Karate, my karate club in Dublin, as part of UCD's COMP10130 Web Design module.

The project was to design and develop a website that gives visitors an overview of the club, its instructors, training schedule and other information they might need before joining. I built it using HTML, CSS and JavaScript, with a focus on keeping the layout consistent across pages and usable on different screen sizes.

## Features

- **Home page:** Introduction to the club and its instructors.
- **Our Members:** Profiles of instructors and students.
- **Training timetable:** Class schedule with JavaScript pop-ups showing session details.
- **History:** Timeline covering the development of Kenpo Karate.
- **Information:** Training times, membership details, contact information and an embedded Google Map.
- **Gallery:** Photos of club members and training, with CSS hover effects.
- **Responsive styling:** CSS media queries, Flexbox and Grid layouts to adapt pages to smaller screens.

## Technologies Used

- HTML
- CSS (Flexbox, Grid and media queries)
- JavaScript
- Google Fonts
- Google Maps embed

## Running the Website

There are no packages to install or build steps required.

1. Clone or download the repository.
2. Open `home.html` in a web browser.
3. Use the navigation bar to move between the pages.

The site uses local images in the `Images/` folder. The interactive timetable also relies on `timetable.js`, which is loaded by `timetable.html`, so these files need to be present in the repository.

## Project Files

The website is organised into separate HTML pages, with `main.css` for shared styling and individual CSS files for the page-specific layouts.

| File | Purpose |
| --- | --- |
| `home.html` | Home page |
| `articles.html` | Member profiles |
| `timetable.html` | Training schedule and modal interactions |
| `history.html` | Kenpo history timeline |
| `information.html` | Club and training information |
| `gallery.html` | Photo gallery |
| `main.css` | Shared website styles |
| `*.css` | Page-specific styles |
| `timetable.js` | Timetable rendering functionality |
| `Images/` | Club logo and photos |

## About the Project

I chose to base this project on my own karate club so I could work with a subject I knew well. It gave me experience building a multi-page website from scratch, organising CSS across different pages and adding JavaScript functionality rather than making the site entirely static.
