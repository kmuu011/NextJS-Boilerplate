const serverType: string = process.env.NODE_ENV;

const domainObject: {
    [key: string]: string
} = {
    production: "http://127.0.0.1:8081/",
    development: "http://127.0.0.1:8081/",
};

export const hostDomain: string = domainObject[serverType];
