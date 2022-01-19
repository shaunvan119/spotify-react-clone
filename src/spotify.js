

//Redirects user to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

//Redirects user back to home page once logged in
const clientId = "520c4c6d3555432697f5f5df86ed50ec";
const redirectUri = "http://localhost:3000/callback";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;