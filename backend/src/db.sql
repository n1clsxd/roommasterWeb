CREATE DATABASE room_master;
USE room_master;

CREATE TABLE `company` (
 `id` int(10) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(45) DEFAULT NULL,
 `parent_id` int(10) DEFAULT NULL,
 `type` char(1) DEFAULT 'M',
 `domain` VARCHAR(64) DEFAULT NULL,
 `isActive` TINYINT(1) DEFAULT '1',
 `creationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
 `changeDate` timestamp NULL DEFAULT NULL,
 PRIMARY KEY (`id`)
);

CREATE TABLE `room` (
 `id` int(10) NOT NULL AUTO_INCREMENT,
 `company_id` int(10) DEFAULT NULL,
 `name` VARCHAR(45) DEFAULT NULL,
 `seats` int(11) DEFAULT NULL,
 `media` TINYINT(1) DEFAULT '1',
 `hasAir` TINYINT(1) DEFAULT '1',
 `area` decimal(9,2) DEFAULT NULL,
 `location` VARCHAR(128) DEFAULT NULL,
 `latitude` double DEFAULT NULL,
 `longitude` double DEFAULT NULL,
 `schedule` VARCHAR(128) DEFAULT NULL,
 `isActive` TINYINT(1) DEFAULT '1',
 `creationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
 `changeDate` timestamp NULL DEFAULT NULL,
 PRIMARY KEY (`id`),
 FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
);

CREATE TABLE `user` (
 `id` int(10) NOT NULL AUTO_INCREMENT,
 `company_id` int(10) DEFAULT NULL,
 `name` VARCHAR(45) DEFAULT NULL,
 `email` VARCHAR(45) UNIQUE DEFAULT NULL,
 `password` VARCHAR(256) DEFAULT NULL,
 `role` CHAR(1) DEFAULT `U`,
 PRIMARY KEY (`id`),
 FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
);

CREATE TABLE `meeting` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `room_id` int(11) DEFAULT NULL,
 `owner_id` int(11) DEFAULT NULL,
 `owner_name` VARCHAR(45) DEFAULT NULL,
  `invited_id` VARCHAR(500) DEFAULT NULL,
 `description` VARCHAR(300) DEFAULT NULL,
 `start_dateTime` DATETIME DEFAULT NULL,
 `end_dateTime` DATETIME DEFAULT NULL,
 `creationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
 `changeDate` timestamp NULL DEFAULT NULL,
 `isActive` TINYINT(1) DEFAULT '1',
 PRIMARY KEY (`id`),
 FOREIGN KEY (`room_id`) REFERENCES `room` (`id`),
 FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`)
);