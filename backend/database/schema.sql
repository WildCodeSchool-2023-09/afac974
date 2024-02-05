-- SQLBook: Code

CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO role (name) values ('ADMIN'), ('ARTIST'), ('USER');

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(75) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` VARCHAR(255), 
  `id_role` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_role`) REFERENCES role(id)
);

CREATE TABLE `artwork` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `style` varchar(50) DEFAULT NULL,
  `format` varchar(50) NOT NULL,
  `certified` BOOLEAN DEFAULT false,
  `id_user` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_user`) REFERENCES user(id)
);

CREATE TABLE `favorite` (
  `id_user` INT,
  `id_artwork` INT,
  FOREIGN KEY (`id_user`) REFERENCES user(id),
  FOREIGN KEY (`id_artwork`) REFERENCES artwork(id)
);
INSERT INTO `user` VALUES (1,'admin','admin','admin@admin.fr','$argon2id$v=19$m=19456,t=2,p=1$vm8CTYkebL/M9iqP72FfUg$Cxf8o3iAIwFrtbAoqbTf0TZKyS6QtcqUMOtd2Ravzic','/profile/default.png',1);