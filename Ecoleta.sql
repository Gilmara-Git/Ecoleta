CREATE DATABASE ecoleta
--DROP SCHEMA PUBLIC CASCADE;
--CREATE SCHEMA PUBLIC;

CREATE TABLE "places" (
  "id" SERIAL PRIMARY KEY,
  "image" text,
  "name" text,
  "address" text,
  "address2" text,
  "state" text,
  "city" text,
  "items" text
);
