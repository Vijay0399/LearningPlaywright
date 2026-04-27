// you are working as API Validation 
// you have to validate the API response status code and response body using switch statement

let apiResponseStatusCode = 200; // example status code 

switch (apiResponseStatusCode) {
    case 200:
        console.log("OK - The request has succeeded.");
        break;
    case 201:
        console.log("Created - The request has been fulfilled and resulted in a new resource being created.");
        break;
    case 400:
        console.log("Bad Request - The server could not understand the request due to invalid syntax.");
        break;
    case 401:
        console.log("Unauthorized - The client must authenticate itself to get the requested response.");
        break;
    case 403:
        console.log("Forbidden - The client does not have access rights to the content.");
        break;
    case 404:
        console.log("Not Found - The server can not find the requested resource.");
        break;
    case 500:
        console.log("Internal Server Error - The server has encountered a situation it doesn't know how to handle.");
        break;
    default:
        console.log("Unexpected status code: " + apiResponseStatusCode);
}
