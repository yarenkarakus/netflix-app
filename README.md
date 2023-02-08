# NETFLIX-APP

A Netflix app built using React. It fetches the data from TMDB (The Movie Database) API.

## You can:

- Sign up, login, logout
- Add Wishlist
- See your Wishlist

## I used:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/) for routing
- [React İcon](https://react-icons.github.io/react-icons)
- [Tailwind](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/) for authentication and database
- [TMDB](https://www.themoviedb.org/) for movies

## Usage

### Credentials

Go to project root directory and run:

```
cp .env.example .env
```

This will create an `.env` file with needed fields in root directory.

You need one thing for this project to work:

- A [Firebase](https://firebase.google.com/) web project and your Firebase config credentials.

Once you get your credentials, open .env file and fill the related variables with your own credentials.

### Install dependencies

```
yarn
```

### Run React dev server

```
yarn dev
```

### To build for production

```
yarn build
```
