-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ypPortfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ypPortfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ypPortfolio` DEFAULT CHARACTER SET utf8 ;
USE `ypPortfolio` ;

-- -----------------------------------------------------
-- Table `ypPortfolio`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`persona` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(40) NULL,
  `apellido` VARCHAR(40) NULL,
  `ocupacion` VARCHAR(100) NULL,
  `sobremi` LONGTEXT NULL,
  `experienciasTexto` LONGTEXT NULL,
  `cv` VARCHAR(200) NULL,
  `email` VARCHAR(90) NULL,
  `clave` VARCHAR(40) NULL,
  `bannerEntrada` LONGTEXT NULL,
  `bannerAvatar` LONGTEXT NULL,
  `bannerEducacion` LONGTEXT NULL,
  `bannerSalida` LONGTEXT NULL,
  `subtitulo1` VARCHAR(90) NULL,
  `subtitulo2` VARCHAR(90) CHARACTER SET 'binary' NULL,
  `logoBrand` VARCHAR(200) NULL,
  `copyrights` VARCHAR(90) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`educacion` (
  `id` INT NOT NULL,
  `logoInstitucion` LONGTEXT NULL,
  `logoAlt` VARCHAR(45) NULL,
  `anioeInstitucion` VARCHAR(100) NULL,
  `titulo` VARCHAR(100) NULL,
  `descripcion` VARCHAR(200) NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_educacion_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_educacion_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`experiencia` (
  `id` INT NOT NULL,
  `rubro` VARCHAR(45) NULL,
  `logoLugar` LONGTEXT NULL,
  `lugar` VARCHAR(45) NULL,
  `puesto` VARCHAR(45) NULL,
  `descripcion` LONGTEXT NULL,
  `fechaInicio` DATE NULL,
  `fechaFin` DATE NULL,
  `esTrabajoActual` TINYINT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_experiencia_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_experiencia_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`red`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`red` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `url` VARCHAR(100) NULL,
  `iconred` VARCHAR(45) NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_red_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_red_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`skill_web`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`skill_web` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `porcentaje` INT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_skill_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`proyecto_web`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`proyecto_web` (
  `id` INT NOT NULL,
  `imgPageProyecto` LONGTEXT NULL,
  `imgPageAlt` VARCHAR(25) NULL,
  `hrefTargetBlank` LONGTEXT NULL,
  `hrefLive` VARCHAR(100) NULL,
  `hrefRepo` VARCHAR(100) NULL,
  `tituloProyecto` VARCHAR(80) NULL,
  `descripcion` VARCHAR(250) NULL,
  `fecha` DATE NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_proyecto_persona_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_proyecto_persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`contacto` (
  `id` INT NOT NULL,
  `servicios1` LONGTEXT NULL,
  `servicios2` LONGTEXT NULL,
  `salida1` VARCHAR(200) NULL,
  `salida2` VARCHAR(200) NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_contacto_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_contacto_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`proyecto_arq`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`proyecto_arq` (
  `id` INT NOT NULL,
  `imgPageProyecto` LONGTEXT NULL,
  `imgPageAlt` VARCHAR(25) NULL,
  `hrefTargetBlank` LONGTEXT NULL,
  `hrefLive` LONGTEXT NULL,
  `tituloProyecto` VARCHAR(80) NULL,
  `descripcion` VARCHAR(250) NULL,
  `fecha` DATE NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_proyecto_persona_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_proyecto_persona0`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`skill_arq`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`skill_arq` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `porcentaje` INT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_skill_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_persona10`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`skill_soft`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`skill_soft` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `porcentaje` INT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_skill_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_persona11`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`skill_idioma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`skill_idioma` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `porcentaje` INT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_skill_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_persona12`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
