-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema digitales
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema digitales
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `digitales` DEFAULT CHARACTER SET utf8 ;
USE `digitales` ;

-- -----------------------------------------------------
-- Table `digitales`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitales`.`usuarios` (
  `user_name` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `name` VARCHAR(25) NOT NULL,
  `password` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`user_name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `digitales`.`aulas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitales`.`aulas` (
  `id_aulas` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id_aulas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `digitales`.`sensores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitales`.`sensores` (
  `id_sensores` INT NOT NULL,
  `type` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id_sensores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `digitales`.`mediciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitales`.`mediciones` (
  `id_sensores` INT NOT NULL,
  `id_aulas` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `value` DOUBLE NOT NULL,
  `description` VARCHAR(45) NULL,
  `battery_level` DOUBLE NULL,
  INDEX `fk_mediciones_sensores_idx` (`id_sensores` ASC),
  INDEX `fk_mediciones_aulas1_idx` (`id_aulas` ASC),
  PRIMARY KEY (`date`, `value`),
  CONSTRAINT `fk_mediciones_sensores`
    FOREIGN KEY (`id_sensores`)
    REFERENCES `digitales`.`sensores` (`id_sensores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mediciones_aulas1`
    FOREIGN KEY (`id_aulas`)
    REFERENCES `digitales`.`aulas` (`id_aulas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
