import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableForDatabase1680668876969 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS attributeItems (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, nameAscii VARCHAR(255) NOT NULL, isShowNavFilter BOOL DEFAULT 0, levelOrder TINYINT)',
    );

    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS attributeSpecItems (id INT AUTO_INCREMENT PRIMARY KEY, attributeName VARCHAR(255) NOT NULL, specName VARCHAR(255) NOT NULL, cssClass VARCHAR(255) NOT NULL, productID INT NOT NULL, attributeID INT NOT NULL)',
    );

    await queryRunner.query(
      ' CREATE TABLE IF NOT EXISTS listCategory (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, seoTitle VARCHAR(255) NOT NULL, metaDescription TEXT NOT NULL, metaKeyword VARCHAR(255) NOT NULL, nameAscii VARCHAR(255) NOT NULL, imageCateUrl VARCHAR(255) NOT NULL, shareImageUrl VARCHAR(255) NOT NULL, parentID INT NOT NULL, `order` TINYINT NOT NULL, isShowInTab BOOL DEFAULT 0, isShowInNavFilter BOOL DEFAULT 0) ',
    );

    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS productVariant (id INT AUTO_INCREMENT PRIMARY KEY, sku VARCHAR(255) NOT NULL, productID INT NOT NULL, priceMarket DEC(15, 4) NOT NULL, price DEC(15, 4) NOT NULL)',
    );

    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, brandName VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, nameAscii VARCHAR(255) NOT NULL, urlPicture VARCHAR(255) NOT NULL, labelInst VARCHAR(255) NOT NULL, labelFlashSale VARCHAR(255) NOT NULL)',
    );

    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS promotionItems (id INT AUTO_INCREMENT PRIMARY KEY, sku VARCHAR(255) NOT NULL, promotionName VARCHAR(255) NOT NULL, urlPicture VARCHAR(255) NOT NULL,displayOrder TINYINT)',
    );

    await queryRunner.query(
      'CREATE TABLE IF NOT EXISTS specItems (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, nameAscii VARCHAR(255) NOT NULL, attrCusGroupName VARCHAR(255) NOT NULL, attrCusGroupNameAscii VARCHAR(255) NOT NULL,displayOrder TINYINT,attributeID INT,attributeCustomID INT)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `attributeItems`');
    await queryRunner.query('DROP TABLE `attributeSpecItems`');
    await queryRunner.query('DROP TABLE `listCategory`');
    await queryRunner.query('DROP TABLE `productVariant`');
    await queryRunner.query('DROP TABLE `products`');
    await queryRunner.query('DROP TABLE `promotionItems`');
    await queryRunner.query('DROP TABLE `specItems`');
  }
}
