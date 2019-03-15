# WebSocket CMS
A small proof of concept of what might eventually become a fully fledged service for collaborative editing for a large range of different form fields and types. Uses [Socket.IO](https://socket.io/) to manage a room for some grouping of content perhaps a single instance of a webform or perhaps some domain object(s). The initial commit disables input fields that other users are focused on, and syncs the values that the other users type.

# Installation
Installation consists of one prerequisite and 4 commands

1. Make sure you have [yarn](https://yarnpkg.com/en/) installed.
2. Clone the Repository into the directory desired:

    `git clone git@github.com:patrick-mcdougle/WebSocketCMS.git`
3. Install project dependencies:

    `cd WebSocketCMS && yarn install`
4. Build the client JS

    `yarn build`
5. Run the server:

    `yarn server`

# Play Around

1. Open multiple browser windows to the index.html file in the dist folder.
2. Focus on various form fields and see how they disable in the other window.
3. Type values into the form fields and focus off of them. See how the values update in the other window.

# Contribute

Clearly this is a really basic proof of concept, I welcome collaborators in this project. Feel free to open PRs to improve it. ♥ Thanks!
