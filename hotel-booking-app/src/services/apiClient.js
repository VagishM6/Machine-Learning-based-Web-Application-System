 // receiving the API Request form mocky API server through the http protocol

const apiClient = {

    getHomes: () => {
        return fetch("https://run.mocky.io/v3/91a0f51b-ceca-4a6f-9882-20dd28184c19")
            .then((response) => response.json());
    },

    bookHome: (homeData, checkinDate, checkoutDate) => {
        return fetch("https://run.mocky.io/v3/1c722cd7-0f06-400a-b079-638e23181e58")
            .then((response) => response.json());
    },

};

export default apiClient