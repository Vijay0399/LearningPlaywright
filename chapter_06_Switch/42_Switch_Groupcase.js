let browser = "chrome";

switch (browser) {
    case "chrome":
    case "edge":
    case "firefox":
        console.log("This is a supported browser: " + browser);
        break;
    case "safari":
        console.log("Safari is supported but may have limited features.");
        break;
    default:
        console.log("Unsupported browser: " + browser);
}
