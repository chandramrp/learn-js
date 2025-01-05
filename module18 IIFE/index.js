(function () {
    console.log("IIFE dipanggil");
})();

const appConfig = (function () {
    const apiKey = "123";
    const apiUrl = "https://api.examples.com";

    return {
        getApiKey: function () {
            return apiKey;
        },
        getApiUrl: function () {
            return apiUrl;
        },
    };
})();

console.log(appConfig.getApiKey());
console.log(appConfig.getApiUrl());
