<p align="center"><a href="https://laravel.com" target="_blank"><img src="http://blog.amio.io/content/images/2018/06/vue.png" width="200"></a></p>

## What I need?
First of all you need the following technologies:
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/try/download/community)
* [Pnpm](https://pnpm.io/) or `npm install -g pnpm`

## Why pnpm?
A little tip for you, reader, is that `pnpm` works like `npm` but it has a global storage, so, it make a shortcut of the cached dependencies to our projects and save a lot of space and time installing.

## Spoiler
![App Gif](https://media1.giphy.com/media/LGigySsh3atCDyNRyI/giphy.gif?cid=790b76112d9fdd48d770b0535054be17a6205049d0433880&rid=giphy.gif&ct=g)

## What to do now?
Inside this project you have 2 spaces. One for the client and other for the server.

You must to do the following instructions:

1. Install client dependencies
```bash
pnpm install 
```
2. Go to server directory and install the dependencies
```bash
cd server
pnpm install 
```
3. Run the build for the server
```bash
npm run server:build
```
4. Run the server and the client in 2 different consoles
```bash
npm run server:start
```
```bash
npm run start
```

5. Enjoy!

Client URL: `http://localhost:8080`

API URL: `http://localhost:3000`