CREATE TABLE "calculations" (
	"id" SERIAL PRIMARY KEY,
	"expression" VARCHAR(50) NOT NULL,
	"equal_sign" VARCHAR(5) NOT NULL,
	"result" VARCHAR(50) NOT NULL
);

--For the POST route
INSERT INTO "calculations" 
("expression", "equal_sign", "result") VALUES
('5+6', '=', '11'), ('4-5', '=', '-1');

-- For the GET route
SELECT * FROM "calculations";

--For the DELETE route
DELETE FROM "calculations";

DROP TABLE "calculations";