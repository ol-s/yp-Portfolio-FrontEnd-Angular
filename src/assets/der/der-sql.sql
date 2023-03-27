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
  `bannerEntrada` LONGTEXT NULL,
  `sobremi` LONGTEXT NULL,
  `bannerAvatar` LONGTEXT NULL,
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
  `bannerEducacion` LONGTEXT NULL,
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
-- Table `ypPortfolio`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`usuario` (
  `id` INT NOT NULL,
  `email` VARCHAR(55) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_usuario_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_persona1`
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
-- Table `ypPortfolio`.`rubroSkill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`rubroSkill` (
  `id` INT NOT NULL,
  `rubroSkill` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`skill` (
  `id` INT NOT NULL,
  `rubro` VARCHAR(55) NULL,
  `nombre` VARCHAR(45) NULL,
  `porcentaje` INT NULL,
  `persona_id` INT NOT NULL,
  `rubroSkill_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`, `rubroSkill_id`),
  INDEX `fk_skill_persona1_idx` (`persona_id` ASC) VISIBLE,
  INDEX `fk_skill_rubroSkill1_idx` (`rubroSkill_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_skill_rubroSkill1`
    FOREIGN KEY (`rubroSkill_id`)
    REFERENCES `ypPortfolio`.`rubroSkill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`rubroProyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`rubroProyecto` (
  `id` INT NOT NULL,
  `rubroProyecto` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`proyecto` (
  `id` INT NOT NULL,
  `rubro` VARCHAR(45) NULL,
  `imgPageProyecto` LONGTEXT NULL,
  `imgPageAlt` VARCHAR(25) NULL,
  `hrefTargetBlank` LONGTEXT NULL,
  `targetBlackAlt` VARCHAR(25) NULL,
  `hrefLive` VARCHAR(100) NULL,
  `hrefRepo` VARCHAR(100) NULL,
  `tituloProyecto` VARCHAR(45) NULL,
  `descripcion` VARCHAR(100) NULL,
  `persona_id` INT NOT NULL,
  `rubroProyecto_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`, `rubroProyecto_id`),
  INDEX `fk_proyecto_persona_idx` (`persona_id` ASC) VISIBLE,
  INDEX `fk_proyecto_rubroProyecto1_idx` (`rubroProyecto_id` ASC) VISIBLE,
  CONSTRAINT `fk_proyecto_persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_proyecto_rubroProyecto1`
    FOREIGN KEY (`rubroProyecto_id`)
    REFERENCES `ypPortfolio`.`rubroProyecto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ypPortfolio`.`contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ypPortfolio`.`contacto` (
  `id` INT NOT NULL,
  `servicios` LONGTEXT NULL,
  `descripcion` LONGTEXT NULL,
  `bannerSalida` LONGTEXT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_contacto_persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_contacto_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `ypPortfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
