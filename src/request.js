const key = "LqQy71rtWUIaH9uKnNkFGdYEt-AU4inLXg7_L-Mu6gk"

const requests = {
  requestHome: `https://api.unsplash.com/photos/random?query=home&count=12&client_id=${key}`,
  requestLifestyle: `https://api.unsplash.com/photos/random?query=life&count=8&client_id=${key}`,
  requestHealth: `https://api.unsplash.com/photos/random?query=health&count=8&client_id=${key}`,
  requestTravel: `https://api.unsplash.com/photos/random?query=travel&count=8&client_id=${key}`,
  requestMain: `https://api.unsplash.com/photos/random?query=minimalist&count=3&client_id=${key}`,
};

export default requests;
export {key};
