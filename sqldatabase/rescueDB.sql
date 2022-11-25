CREATE DATABASE rescueDB

/*USE rescueDB */

CREATE TABLE messages(
    nodeID INT PRIMARY KEY,
    severity VARCHAR(255),
    latitude VARCHAR(255),
    longitude VARCHAR(255)
);
