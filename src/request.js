const key = "1b5ebD6_vLuzBdszW-wAZ5J8TYuJn-7OB4dXVVAzSlQ";

const requests = {
  requestHome: `https://api.unsplash.com/search/photos?query=home&client_id=${key}`,
  requestLifestyle: `https://api.unsplash.com/search/photos?query=lifestyle&client_id=${key}`,
  requestHealth: `https://api.unsplash.com/search/photos?query=health&client_id=${key}`,
  requestTravel: `https://api.unsplash.com/search/photos?query=travel&client_id=${key}`,
  requestMain: `https://api.unsplash.com/search/photos?query=minimalist&client_id=${key}`,
};

export default requests;
