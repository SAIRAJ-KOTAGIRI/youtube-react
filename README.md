# Getting Started with Create React App
    - npx create-react-app youtube

# Tailwind Installation
    - npm i -D tailwindcss
    - npx tailwindcss init
    - content: ["./src/**/*.js"] add in tailwind.config.js
    - In App.css add the below 3 lines
        - @tailwind base;
        - @tailwind components;
        - @tailwind utilities;

# Redux Installation
    - reduxjs/toolkit, react-redux
    - create store.js configuration
    - create appSlice.js
    - In App.js add config (Provider)

# React Rounter Installation
    - npm i react-router-dom

# Live Data
    - Web Scokets - 2 way connection  (UI)          <=>             (Server)
                                             Create Handshake
        - Bi-directional live data                                        
        - Send data immediately from back end to front end and vice versa
        - Example (Live Chatting, Trading, Whats App)
    - API Polling (Long Polling) - Example G-mail, Cricbuzz
        (UI) Request to Server and the data will be sent back to UI
        And this is only One Direction
        After an interval, it will again request the server
