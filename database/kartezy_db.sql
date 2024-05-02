-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: kartzy_db
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) DEFAULT NULL,
  `category_description` text,
  `parent_category_id` int DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Electronics','Devices and gadgets powered by electricity, including smartphones, laptops, TVs, and home appliances.',0,'2024-04-22 09:02:13',0),(2,'Clothing & Apparel','Clothing items, footwear, and accessories for men, women, and children, ranging from everyday wear to formal attire.',0,'2024-04-22 09:02:13',0),(3,'Home & Kitchen','Products for household use, such as cookware, utensils, home decor, furniture, and cleaning supplies.',0,'2024-04-22 09:02:13',0),(4,'Beauty & Personal Care','Items related to personal grooming, skincare, haircare, cosmetics, fragrances, and wellness products.\n',0,'2024-04-22 09:02:13',0),(5,'Books & Stationery','Printed and digital books, as well as writing materials, office supplies, and organizational tools',0,'2024-04-22 09:02:13',0),(6,'Toys & Games','Playthings and recreational activities for children and adults, encompassing toys, board games, video games, and puzzles',0,'2024-04-22 09:02:13',0),(7,'Sports & Outdoors','Gear and equipment for various sports and outdoor activities, including hiking, camping, cycling, and team sports.',0,'2024-04-22 09:02:13',0),(8,'Furniture & Decor','Items for furnishing and decorating living spaces, including sofas, tables, beds, rugs, lamps, and wall art.',0,'2024-04-22 09:02:13',0),(21,'Smartphones & Accessories',NULL,1,'2024-04-22 09:10:20',0),(22,'Computers & Laptops',NULL,1,'2024-04-22 09:10:20',0),(23,'Home Appliances',NULL,1,'2024-04-22 09:10:20',0),(24,'Tops & Shirts',NULL,2,'2024-04-22 09:10:20',0),(25,'Bottoms & Pants',NULL,2,'2024-04-22 09:10:20',0),(26,'Shoes & Footwear',NULL,2,'2024-04-22 09:10:20',0),(27,'Cookware & Bakeware',NULL,3,'2024-04-22 09:10:20',0),(28,'Cleaning Supplies & Organization',NULL,3,'2024-04-22 09:10:20',0),(29,'Skincare & Facial Care',NULL,4,'2024-04-22 09:10:20',0),(30,'Makeup & Cosmetics',NULL,4,'2024-04-22 09:10:20',0),(31,'Notebooks & Journals',NULL,5,'2024-04-22 09:10:20',0),(32,'Pens & Writing Instruments',NULL,5,'2024-04-22 09:10:20',0),(33,'Action Figures & Dolls',NULL,6,'2024-04-22 09:10:20',0),(34,'Board Games & Puzzles',NULL,6,'2024-04-22 09:12:49',0),(35,'Cycling & Biking Equipment',NULL,7,'2024-04-22 09:14:00',0),(36,'Camping & Hiking Gear',NULL,7,'2024-04-22 09:14:00',0),(37,'Living Room Furniture',NULL,8,'2024-04-22 09:15:27',0),(38,'Wall Decor & Art Pieces',NULL,8,'2024-04-22 09:15:27',0);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_addresses`
--

DROP TABLE IF EXISTS `customer_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `titel` text,
  `house_no` varchar(20) DEFAULT NULL,
  `land_mark` text,
  `area` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `pincode` char(6) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `customer_addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_addresses`
--

LOCK TABLES `customer_addresses` WRITE;
/*!40000 ALTER TABLE `customer_addresses` DISABLE KEYS */;
INSERT INTO `customer_addresses` VALUES (2,4,'Office Address 1','A-109','Sukan Mall','Science City, Sola','Ahmedabad','Gujarat','370140','2024-04-22 12:10:42',0),(3,4,'Home Address','89-D','Kargil Petrol pump','Sola','Ahmedabad','Gujarat','370141','2024-04-22 12:12:15',0),(4,5,'Home','J-10','Navagam road','Navi Bhachau','Bhachau','Gujarat','123456','2024-04-22 12:33:54',0);
/*!40000 ALTER TABLE `customer_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_payment_detail`
--

DROP TABLE IF EXISTS `customer_payment_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_payment_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `card_holder_name` varchar(50) DEFAULT NULL,
  `card_number` varchar(20) DEFAULT NULL,
  `card_type` varchar(20) DEFAULT NULL,
  `expiry` varchar(10) DEFAULT NULL,
  `cvv` char(3) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `customer_payment_detail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_payment_detail`
--

LOCK TABLES `customer_payment_detail` WRITE;
/*!40000 ALTER TABLE `customer_payment_detail` DISABLE KEYS */;
INSERT INTO `customer_payment_detail` VALUES (2,4,'Mohit Moradiya','1234-1234-1234-1235','Debit card','12/12','123','2024-04-22 12:11:06',0),(3,4,'Mohit Moradiya','1234-1234-1234-9874','Credit card','12/28','123','2024-04-22 12:12:48',0),(4,5,'Dharm Patel','1234-1234-1234-5648','Credit card','03/28','123','2024-04-22 12:34:50',0);
/*!40000 ALTER TABLE `customer_payment_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `note` text,
  `is_read` tinyint(1) DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (4,3,4,1,159999,159999,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(5,3,3,1,21999,21999,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(6,3,2,3,134900,404700,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(7,3,10,2,10000,20000,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(8,3,6,3,4999,14997,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(9,4,6,10,4999,49990,'2024-04-22 12:35:05','2024-04-22 12:35:05',0),(10,5,3,3,21999,65997,'2024-04-22 12:49:59','2024-04-22 12:49:59',0),(11,6,4,1,159999,159999,'2024-04-22 12:50:37','2024-04-22 12:50:37',0),(12,7,4,1,159999,159999,'2024-04-22 12:52:16','2024-04-22 12:52:16',0),(13,8,4,1,159999,159999,'2024-04-22 12:52:44','2024-04-22 12:52:44',0),(14,9,9,2,70,140,'2024-04-22 12:55:59','2024-04-22 12:55:59',0),(15,10,9,2,70,140,'2024-04-22 12:56:12','2024-04-22 12:56:12',0),(16,11,9,2,70,140,'2024-04-22 12:56:19','2024-04-22 12:56:19',0),(17,12,9,2,70,140,'2024-04-22 12:56:55','2024-04-22 12:56:55',0),(18,13,9,2,70,140,'2024-04-22 12:57:01','2024-04-22 12:57:01',0),(19,14,6,1,4999,4999,'2024-04-22 12:58:10','2024-04-22 12:58:10',0),(20,14,2,1,134900,134900,'2024-04-22 12:58:10','2024-04-22 12:58:10',0),(21,15,9,4,70,280,'2024-04-22 13:02:52','2024-04-22 13:02:52',0),(22,15,10,1,10000,10000,'2024-04-22 13:02:52','2024-04-22 13:02:52',0),(23,16,9,1,70,70,'2024-04-22 13:05:23','2024-04-22 13:05:23',0);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `order_note` text,
  `shipping_cost` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `deliver_date` timestamp NULL DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  `status` varchar(30) DEFAULT 'Delivered',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `customer_addresses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,4,2,'Bring Carefully....!',90,621695,'2024-04-29 06:52:22','2024-04-22 12:22:22','2024-04-22 12:22:22',0,'Delivered'),(4,5,4,'Call is not Allowd!',90,49990,'2024-04-29 07:05:05','2024-04-22 12:35:05','2024-04-22 12:35:05',0,'Delivered'),(5,5,4,'NONE',90,65997,'2024-04-29 07:19:59','2024-04-22 12:49:59','2024-04-22 12:49:59',0,'Delivered'),(6,5,4,'NONE',90,159999,'2024-04-29 07:20:37','2024-04-22 12:50:37','2024-04-22 12:50:37',0,'Delivered'),(7,5,4,'NONE',90,159999,'2024-04-29 07:22:16','2024-04-22 12:52:16','2024-04-22 12:52:16',0,'Delivered'),(8,5,4,'NONE',90,159999,'2024-04-29 07:22:44','2024-04-22 12:52:44','2024-04-22 12:52:44',0,'Delivered'),(9,5,4,'NONE',90,140,'2024-04-29 07:25:59','2024-04-22 12:55:59','2024-04-22 12:55:59',0,'Delivered'),(10,5,4,'NONE',90,140,'2024-04-29 07:26:12','2024-04-22 12:56:12','2024-04-22 12:56:12',0,'Delivered'),(11,5,4,'NONE',90,140,'2024-04-29 07:26:19','2024-04-22 12:56:19','2024-04-22 12:56:19',0,'Delivered'),(12,5,4,'NONE',90,140,'2024-04-29 07:26:55','2024-04-22 12:56:55','2024-04-22 12:56:55',0,'Delivered'),(13,5,4,'NONE',90,140,'2024-04-29 07:27:01','2024-04-22 12:57:01','2024-04-22 12:57:01',0,'Delivered'),(14,4,4,'No calls!',90,139899,'2024-04-29 07:28:10','2024-04-22 12:58:10','2024-04-22 12:58:10',0,'Delivered'),(15,4,4,'Bring Carefully',90,10280,'2024-04-29 07:32:52','2024-04-22 13:02:52','2024-04-22 13:02:52',0,'Delivered'),(16,5,4,'NONE',90,70,'2024-04-29 07:35:23','2024-04-22 13:05:23','2024-04-22 13:05:23',0,'Delivered');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `permission_name` varchar(100) DEFAULT NULL,
  `api_url` text,
  `method` varchar(10) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'add user','/adduser','post','2024-04-09 02:59:55','2024-04-09 02:59:55',0),(2,'remove user','/removeuser','post','2024-04-09 02:59:55','2024-04-09 02:59:55',0),(3,'add product','/addproduct','post','2024-04-09 02:59:55','2024-04-09 02:59:55',0),(4,'remove product','/removeproduct','post','2024-04-09 02:59:55','2024-04-09 02:59:55',0),(5,'addtocart','/addtocart','post','2024-04-09 02:59:55','2024-04-09 02:59:55',0),(6,'removecart','/removecart','get','2024-04-09 02:59:55','2024-04-09 02:59:55',0),(7,'seeorderdetails','/seeorderdetails','get','2024-04-09 02:59:55','2024-04-09 02:59:55',0);
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_attechments`
--

DROP TABLE IF EXISTS `product_attechments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_attechments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `attechment_path` text,
  `error_message` text,
  `file_type` varchar(30) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_attechments_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_attechments`
--

LOCK TABLES `product_attechments` WRITE;
/*!40000 ALTER TABLE `product_attechments` DISABLE KEYS */;
INSERT INTO `product_attechments` VALUES (1,1,'1713778105275-s24-sub-1.jpeg','product second img','image/jpeg','2024-04-22 09:28:25',0),(2,1,'1713778105275-s24-sub-2.jpeg','product second img','image/jpeg','2024-04-22 09:28:25',0),(3,1,'1713778105275-s24-sub-3.jpeg','product second img','image/jpeg','2024-04-22 09:28:25',0),(4,2,'1713781047725-Screenshot from 2024-04-22 15-44-59.png','product second img','image/png','2024-04-22 10:17:27',0),(5,2,'1713781047725-Screenshot from 2024-04-22 15-45-31.png','product second img','image/png','2024-04-22 10:17:27',0),(6,2,'1713781047729-Screenshot from 2024-04-22 15-47-04.png','product second img','image/png','2024-04-22 10:17:27',0),(7,3,'1713781483543-vivo-y200-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:24:43',0),(8,3,'1713781483544-vivo-y200-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:24:43',0),(9,3,'1713781483544-vivo-y200-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:24:43',0),(10,4,'1713781844215-mac-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:30:44',0),(11,4,'1713781844215-mac-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:30:44',0),(12,4,'1713781844216-mac-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:30:44',0),(13,5,'1713782237443-air-jordan-1-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:37:17',0),(14,5,'1713782237443-air-jordan-1-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:37:17',0),(15,5,'1713782237444-air-jordan-1-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:37:17',0),(16,6,'1713782958702-india-tshirt-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:49:18',0),(17,6,'1713782958703-india-tshirt-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:49:18',0),(18,6,'1713782958703-india-tshirt-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:49:18',0),(19,7,'1713783210080-ironmain-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:53:30',0),(20,7,'1713783210081-ironmain-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:53:30',0),(21,7,'1713783210082-ironmain-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:53:30',0),(22,8,'1713783421259-thor-strom-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:57:01',0),(23,8,'1713783421260-thor-strom-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:57:01',0),(24,8,'1713783421260-thor-strom-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:57:01',0),(25,9,'1713783777283-book-sub-1.jpeg','product second img','image/jpeg','2024-04-22 11:02:57',0),(26,9,'1713783777283-book-sub-2.jpeg','product second img','image/jpeg','2024-04-22 11:02:57',0),(27,9,'1713783777283-book-main.jpeg','product second img','image/jpeg','2024-04-22 11:02:57',0),(28,10,'1713784098425-cycle-sub-2.jpeg','product second img','image/jpeg','2024-04-22 11:08:18',0),(29,10,'1713784098426-cycle-sub-1.jpeg','product second img','image/jpeg','2024-04-22 11:08:18',0),(30,10,'1713784098426-cycle-sub-3.jpeg','product second img','image/jpeg','2024-04-22 11:08:18',0);
/*!40000 ALTER TABLE `product_attechments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_comment_attechments`
--

DROP TABLE IF EXISTS `product_comment_attechments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_comment_attechments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_id` int DEFAULT NULL,
  `attechment_path` text,
  `error_message` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `product_comment_attechments_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `product_comments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_comment_attechments`
--

LOCK TABLES `product_comment_attechments` WRITE;
/*!40000 ALTER TABLE `product_comment_attechments` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_comment_attechments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_comments`
--

DROP TABLE IF EXISTS `product_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `review` text,
  `ratting` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `product_comments_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_comments`
--

LOCK TABLES `product_comments` WRITE;
/*!40000 ALTER TABLE `product_comments` DISABLE KEYS */;
INSERT INTO `product_comments` VALUES (3,10,4,'Nice cycle for kids,',4,'2024-04-22 11:14:12',0),(4,10,5,'Kid Loved it...',5,'2024-04-22 11:18:50',0),(5,10,6,'Quality is not impressive!',1,'2024-04-22 11:19:17',0),(6,10,4,'Color options not nice!',3,'2024-04-22 11:19:56',0),(7,9,5,'Good Pages, Loved it!!',4,'2024-04-22 11:43:38',0),(8,9,4,'More costly!',2,'2024-04-22 11:44:56',0),(9,9,6,'Nice cover pages.',4,'2024-04-22 11:48:38',0),(10,9,4,'Great Colors of pages',4,'2024-04-22 11:49:44',0),(11,9,4,'Liked by kids..',4,'2024-04-22 11:51:58',0),(18,6,4,'Nice fabric',4,'2024-04-22 11:54:42',0),(20,6,5,'Nice Colors',5,'2024-04-22 11:56:35',0),(21,6,6,'Good Team!',4,'2024-04-22 11:57:09',0),(22,5,5,'Nice Shoes!',4,'2024-04-22 11:58:12',0),(23,2,4,'Nice color!',4,'2024-04-22 12:01:34',0);
/*!40000 ALTER TABLE `product_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_specifications`
--

DROP TABLE IF EXISTS `product_specifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_specifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `sepcificaton_key` text,
  `specification_value` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_specifications_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_specifications`
--

LOCK TABLES `product_specifications` WRITE;
/*!40000 ALTER TABLE `product_specifications` DISABLE KEYS */;
INSERT INTO `product_specifications` VALUES (1,1,'Ram','12 GB','2024-04-22 09:28:25',0),(2,1,'Rom','512 GB','2024-04-22 09:28:25',0),(3,1,'Display Size','6.7 inch','2024-04-22 09:28:25',0),(4,2,'Ram','4 GB','2024-04-22 10:17:27',0),(5,2,'Rom','512 GB','2024-04-22 10:17:27',0),(6,2,'Battery','3850 maH','2024-04-22 10:17:27',0),(7,2,'Chip','A15 Bionic','2024-04-22 10:17:27',0),(8,3,'Ram','8 GB','2024-04-22 10:24:43',0),(9,3,'Rom','512 GB','2024-04-22 10:24:43',0),(10,3,'Display','6.7 inch','2024-04-22 10:24:43',0),(11,4,'Ram','8 GB','2024-04-22 10:30:44',0),(12,4,'Rom','512 GB','2024-04-22 10:30:44',0),(13,4,'Display','15 inch','2024-04-22 10:30:44',0),(14,5,'Size','8 UK','2024-04-22 10:37:17',0),(15,5,'Brand','Jordan','2024-04-22 10:37:17',0),(16,5,'Material','leather','2024-04-22 10:37:17',0),(17,6,'Size','46','2024-04-22 10:49:18',0),(18,6,'Brand','Adidas','2024-04-22 10:49:18',0),(19,6,'Material','cotton','2024-04-22 10:49:18',0),(20,7,'Size','Small','2024-04-22 10:53:30',0),(21,7,'Brand','Disney','2024-04-22 10:53:30',0),(22,7,'Material','Plastic','2024-04-22 10:53:30',0),(23,8,'Size','Small','2024-04-22 10:57:01',0),(24,8,'Brand','Disney','2024-04-22 10:57:01',0),(25,8,'Material','Plastic','2024-04-22 10:57:01',0),(26,9,'Pages','140','2024-04-22 11:02:57',0),(27,9,'Size','Long','2024-04-22 11:02:57',0),(28,10,'Gears','no','2024-04-22 11:08:18',0),(29,10,'Size','for kids','2024-04-22 11:08:18',0);
/*!40000 ALTER TABLE `product_specifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` text,
  `product_description` text,
  `category_id` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `vender_id` int DEFAULT NULL,
  `quanitiy` int DEFAULT NULL,
  `main_image_path` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  `is_active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `vender_id` (`vender_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`vender_id`) REFERENCES `users` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


CREATE TABLE `customer_support_query` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `email` text,
  `question` int DEFAULT NULL,
  `answer` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
);

create table `customer_support_query_attchement` (
	`id` int NOT NULL AUTO_INCREMENT,
  `query_id` int,
  `filename` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  foreign key (query_id) references customer_support_query(id)
);


--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'S24 Ultra','\r\n\r\n    Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8\") flat display. It\'s an absolute marvel of design.\r\n    The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display. ',21,139000,2,50,'1713778105274-s24.jpeg','2024-04-22 09:28:25','2024-04-22 11:42:04',0,1),(2,'iPhone 15 pro max','iPhone 15 Pro 128GB Natural Titanium',21,134900,1,46,'1713781047724-iPhone-Main.png','2024-04-22 10:17:27','2024-04-22 12:58:10',0,1),(3,'Vivo Y200','vivo Y200 5G 128GB 8GB RAM Gsm Unlocked Phone Qualcomm SM4375 Snapdragon 4 Gen 1 64MP',21,21999,1,48,'1713781483542-vivo-y200-main.jpeg','2024-04-22 10:24:43','2024-04-22 12:49:59',0,1),(4,'Mac-Book Air','Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver ',22,159999,1,96,'1713781844215-mac-main.jpeg','2024-04-22 10:30:44','2024-04-22 12:52:44',0,1),(5,'Air Jordan 1','Nike.com is your destination for the best selection of innovative, must-have Jordan products.',26,69999,1,0,'1713782237442-air-jordan-1-main.jpeg','2024-04-22 10:37:17','2024-04-22 11:37:15',0,1),(6,'India Cricket Team T-Shirt','Experience the thrill of cricket with the Indian Cricket Team New Jersey -Player Edition from JARSEYS EMPORIA.',24,4999,1,986,'1713782958702-india-tshirt-main.jpeg','2024-04-22 10:49:18','2024-04-22 12:58:10',0,1),(7,'Iron Man','New Iron Super Man Stark MCU Hero Suit Battle Fight ZD Non Branded Action Figure 7 inch Collectible Movie Model with Accessories High Details Moving Joints.',33,4999,1,1000,'1713783210080-ironmain-main.jpeg','2024-04-22 10:53:30','2024-04-22 10:53:30',0,1),(8,'Stom breaker','Stormbreaker was used by Thor to summon the Bifrost Bridge to Wakanda. ',33,120,1,1000,'1713783421259-thor-strom-main.jpeg','2024-04-22 10:57:01','2024-04-22 10:57:01',0,0),(9,'Classmate Book','Nice Smooth Pages enjoy writting...',31,70,2,485,'1713783777281-book-main.jpeg','2024-04-22 11:02:57','2024-04-22 13:05:23',0,1),(10,'A1 Cycle','Lifelong 20T Cycle for Kids 5 to 8 Years - Bike for Boys and Girls ',35,10000,2,497,'1713784098425-cycle-main.jpeg','2024-04-22 11:08:18','2024-04-22 13:02:52',0,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permissions`
--

DROP TABLE IF EXISTS `role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int DEFAULT NULL,
  `permission_id` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_id` (`role_id`,`permission_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `role_permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `role_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permissions`
--

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(20) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2024-04-09 02:12:47',0),(2,'vendor','2024-04-09 03:06:52',0),(3,'user','2024-04-09 03:06:52',0);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transection`
--

DROP TABLE IF EXISTS `transection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `type_of_transection` varchar(20) DEFAULT NULL,
  `mode_of_transection` varchar(20) DEFAULT 'Online',
  `status` tinyint(1) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `payment_id` (`payment_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `transection_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `customer_payment_detail` (`id`),
  CONSTRAINT `transection_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transection`
--

LOCK TABLES `transection` WRITE;
/*!40000 ALTER TABLE `transection` DISABLE KEYS */;
INSERT INTO `transection` VALUES (3,2,3,'Debit card','Online',1,'2024-04-22 12:22:22'),(4,4,4,'Credit card','Online',1,'2024-04-22 12:35:05'),(5,4,5,'Credit card','Online',1,'2024-04-22 12:49:59'),(6,4,6,'Credit card','Online',1,'2024-04-22 12:50:37'),(7,4,7,'Credit card','Online',1,'2024-04-22 12:52:16'),(8,4,8,'Credit card','Online',1,'2024-04-22 12:52:44'),(9,4,9,'Credit card','Online',1,'2024-04-22 12:55:59'),(10,4,10,'Credit card','Online',1,'2024-04-22 12:56:12'),(11,4,11,'Credit card','Online',1,'2024-04-22 12:56:19'),(12,4,12,'Credit card','Online',1,'2024-04-22 12:56:55'),(13,4,13,'Credit card','Online',1,'2024-04-22 12:57:01'),(14,4,14,'Credit card','Online',1,'2024-04-22 12:58:10'),(15,4,15,'Credit card','Online',1,'2024-04-22 13:02:52'),(16,4,16,'Credit card','Online',1,'2024-04-22 13:05:23');
/*!40000 ALTER TABLE `transection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_login_logs`
--

DROP TABLE IF EXISTS `user_login_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_login_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `is_success` tinyint(1) DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_login_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login_logs`
--

LOCK TABLES `user_login_logs` WRITE;
/*!40000 ALTER TABLE `user_login_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_login_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_old_passwords`
--

DROP TABLE IF EXISTS `user_old_passwords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_old_passwords` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `old_password` text,
  `old_salt` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_old_passwords_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_old_passwords`
--

LOCK TABLES `user_old_passwords` WRITE;
/*!40000 ALTER TABLE `user_old_passwords` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_old_passwords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int DEFAULT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile_no` char(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `activation_code` varchar(20) DEFAULT NULL,
  `salt` varchar(10) DEFAULT NULL,
  `password` text,
  `status` tinyint(1) DEFAULT '0',
  `is_active` tinyint(1) DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Gulshan','Pandey','81gulshan@gmail.com','8787878787','2002-03-12',NULL,NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(2,2,'Shivam','Limbachiya','81shivam@gmail.com','7687878787','2002-01-13',NULL,NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(3,2,'Rijavan','Juneja','81rijavan@gmail.com','9898989898','2002-04-16',NULL,NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(4,3,'Mohit','Moradiya','81mohit@gmail.com','7676767623','2002-05-19',NULL,NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(5,3,'Dharm','Patel','81dharm@gmail.com','9876543456','2002-06-21',NULL,NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(6,3,'Nimmii','Mishra','81nimmii@gmail.com','9876567876','2002-07-23',NULL,NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_cart`
--

DROP TABLE IF EXISTS `users_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  `total_price` bigint DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `users_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_cart`
--

LOCK TABLES `users_cart` WRITE;
/*!40000 ALTER TABLE `users_cart` DISABLE KEYS */;
INSERT INTO `users_cart` VALUES (2,4,'My Cart',621695,'2024-04-22 12:03:29',1),(3,4,'My Cart',139899,'2024-04-22 12:57:49',1),(4,4,'My Cart',10280,'2024-04-22 12:59:43',1),(5,4,'My Cart',70,'2024-04-22 13:05:15',0);
/*!40000 ALTER TABLE `users_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_cart_products`
--

DROP TABLE IF EXISTS `users_cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_cart_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `users_cart_products_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `users_cart` (`id`),
  CONSTRAINT `users_cart_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_cart_products`
--

LOCK TABLES `users_cart_products` WRITE;
/*!40000 ALTER TABLE `users_cart_products` DISABLE KEYS */;
INSERT INTO `users_cart_products` VALUES (3,2,4,1,159999,'2024-04-22 12:03:29',1),(4,2,3,1,21999,'2024-04-22 12:03:31',1),(5,2,2,3,404700,'2024-04-22 12:03:34',1),(6,2,10,2,20000,'2024-04-22 12:03:42',1),(7,2,6,3,14997,'2024-04-22 12:03:45',1),(8,3,6,1,4999,'2024-04-22 12:57:49',1),(9,3,2,1,134900,'2024-04-22 12:57:53',1),(10,4,9,4,280,'2024-04-22 12:59:43',1),(11,4,10,1,10000,'2024-04-22 13:02:36',1),(12,5,9,1,70,'2024-04-22 13:05:15',0);
/*!40000 ALTER TABLE `users_cart_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venders`
--

DROP TABLE IF EXISTS `venders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `description` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `venders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venders`
--

LOCK TABLES `venders` WRITE;
/*!40000 ALTER TABLE `venders` DISABLE KEYS */;
INSERT INTO `venders` VALUES (1,2,'A Regular vendor','2024-04-22 12:44:42',0),(2,3,'A new vendor','2024-04-22 12:44:42',0);
/*!40000 ALTER TABLE `venders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22 19:00:52
