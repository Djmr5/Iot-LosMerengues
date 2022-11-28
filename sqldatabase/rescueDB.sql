CREATE DATABASE rescueDB

/*USE rescueDB */

CREATE TABLE messages(
    nodeID INT PRIMARY KEY NOT NULL,
    severity VARCHAR(255),
    risk VARCHAR(255),
    latitude VARCHAR(255),
    longitude VARCHAR(255),
    date DATETIME DEFAULT CURRENT_TIMESTAMP;
);
