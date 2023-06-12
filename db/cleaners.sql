-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 12, 2023 at 05:28 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_js`
--

-- --------------------------------------------------------

--
-- Table structure for table `cleaners`
--

CREATE TABLE `cleaners` (
  `cleanersID` varchar(40) DEFAULT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Province` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cleaners`
--

INSERT INTO `cleaners` (`cleanersID`, `FirstName`, `LastName`, `Gender`, `Phone`, `Province`) VALUES
('7b69c318-96f8-4e1f-b360-a7fd156cd176', 'Puff', 'Arnell', 'Male', '662-454-8543', 'Brazil'),
('f4671f34-a3ec-4fae-8c68-00a948174d58', 'Lorenzo', 'Beddis', 'Genderfluid', '305-592-3157', 'Kenya'),
('36e9ce5c-2c59-4528-91bf-9bb99a1409ff', 'Mellisa', 'Randleson', 'Female', '747-330-1929', 'Finland'),
('15f2e6c7-9563-4a1f-a2da-d4ba1c513914', 'Margot', 'Glason', 'Female', '838-456-4018', 'China'),
('156a5999-72a4-4fc4-baac-e416d9c80013', 'Thedric', 'Giovanitti', 'Male', '921-719-0836', 'Canada'),
('2beb7ce5-fb83-47e9-8b21-c383057e8a0a', 'Shawnee', 'Chatwood', 'Female', '586-181-7204', 'Albania'),
('0d383853-108a-4bda-9889-8371ebadc853', 'Ashly', 'Schoffel', 'Female', '597-153-1719', 'Philippines'),
('711b6fae-f4a5-4a89-8384-8baaee5457b4', 'Kin', 'Jorge', 'Male', '507-991-9537', 'Mexico'),
('3c29def0-1783-440e-b160-0ed3132ef14a', 'Gunther', 'Sleith', 'Male', '825-753-9613', 'Macedonia'),
('0f7b078e-841e-4aac-8ef8-10e961291cc1', 'Udale', 'Heard', 'Male', '242-604-7498', 'Brazil'),
('9e58a3fe-fecd-410e-99d5-7faff0d3a967', 'Ciro', 'Renac', 'Bigender', '163-797-8609', 'Ukraine'),
('4741ae34-ecad-4fd6-aeab-ec08b2e7ba0b', 'Nealon', 'Moreno', 'Male', '814-689-7157', 'Czech Republic'),
('0b3281b2-b8a3-470f-a326-ea0612db7563', 'Hank', 'Connors', 'Male', '713-260-3683', 'Portugal'),
('d117c5de-1a81-4b57-a297-bb453862af5d', 'Dreddy', 'Summergill', 'Female', '128-422-0619', 'Brazil'),
('cbc4178d-7e07-420d-953e-505ac0b908d4', 'Malissia', 'Klaaassen', 'Female', '455-313-4521', 'France'),
('08771325-ef1f-47ff-9617-bf140233af27', 'Kaela', 'Castelow', 'Female', '975-829-6537', 'Tajikistan'),
('5fc9d4ad-58c4-4fb7-998c-1401f31e7f0a', 'Dorthea', 'Armer', 'Female', '885-538-8833', 'Philippines'),
('c062b0d8-6456-4a4f-8187-bb228851b5fd', 'Thekla', 'Maddison', 'Female', '162-371-9958', 'China'),
('88433fd2-e915-4cbe-a728-ea1c937b8fe1', 'Halimeda', 'Ashlin', 'Female', '511-480-1768', 'Armenia'),
('26076092-f05f-4fdb-989c-3af284b3b9b3', 'Heywood', 'Alldritt', 'Male', '777-182-4863', 'Norway'),
('2daa5efa-dac4-47b6-a47f-0b192f187f70', 'Kali', 'Jell', 'Female', '210-721-2706', 'Serbia'),
('aa66d44f-2021-4289-9c85-d17779819b3f', 'Alaine', 'Gathercoal', 'Female', '179-928-9101', 'Finland'),
('be2b42fd-6ca9-426d-970b-77a00e82d481', 'Costa', 'Pudge', 'Male', '648-476-2262', 'Guatemala'),
('009a00ba-7076-4006-9fa5-8722d010f024', 'Annalise', 'Ghidotti', 'Female', '271-213-0540', 'Eritrea'),
('adbf0a61-2b89-4a7e-b5e4-bbcc75e9b607', 'Magdalene', 'Ginnally', 'Female', '602-383-0919', 'France'),
('82b42cea-4c69-45fa-8892-115068dc1568', 'Trip', 'Dyter', 'Male', '938-943-0804', 'Colombia'),
('88d606cc-3267-41da-82e5-24e37d86199c', 'Genvieve', 'Furmonger', 'Female', '747-561-2646', 'Indonesia'),
('e4924456-8b3f-4be7-af03-19a98aac9ed5', 'Lissie', 'Jendrich', 'Female', '408-382-2872', 'Uzbekistan'),
('2d6733c3-8e3d-498c-a8f7-4fae09639804', 'Mellie', 'Leed', 'Female', '726-885-0335', 'China'),
('30346622-1d88-4c42-8e6e-04810a8c7b6c', 'Bryn', 'Lesley', 'Male', '144-467-9728', 'Philippines'),
('308ebabc-a85b-4e42-9618-064eeecd6175', 'Emmie', 'Lutas', 'Female', '837-785-4800', 'Philippines'),
('46f5c838-5776-478a-9de1-556b135a0dea', 'Winnah', 'Yeoland', 'Female', '557-282-5580', 'Vietnam'),
('aa9f7189-f3fa-40d1-9156-530d34423266', 'Aleda', 'Mahmood', 'Female', '741-687-1908', 'Malaysia'),
('00bed018-ccdb-4331-b117-9af1a518698f', 'Quintilla', 'Carvil', 'Female', '212-151-2993', 'China'),
('a3a6217e-017e-4eed-85b3-dbc610c926c9', 'Penelope', 'Given', 'Female', '702-493-7590', 'Argentina'),
('ded98010-fcd8-4f7b-8d6b-3d9397cbaf78', 'Corabelle', 'Haythornthwaite', 'Female', '972-911-6150', 'Hungary'),
('cd1e11b2-112c-4054-8bce-007daecefc91', 'Adrian', 'Lafflina', 'Male', '483-114-8178', 'Tanzania'),
('de150447-7268-4b29-b472-827850ac40bd', 'Steffi', 'Algie', 'Female', '319-169-1281', 'Indonesia'),
('20e14888-0ebe-45de-b4ff-12f5bbd8eabc', 'Ebonee', 'Aksell', 'Female', '958-647-3448', 'Indonesia'),
('4aa01ff5-9cab-4f0a-8bfe-0eb64939e01f', 'Carlyn', 'Tucknott', 'Female', '726-183-5490', 'Brazil'),
('1f2f35d4-ee3c-46ab-a896-bf8cdf57729c', 'Albert', 'Guly', 'Male', '483-225-9032', 'Nigeria'),
('47671861-d5a6-489c-bbde-4c9d62829e2c', 'Eloisa', 'Jacqueminet', 'Female', '489-207-4963', 'Indonesia'),
('a6600de4-4fab-43f5-a395-0042f94b83ce', 'Saudra', 'Klimaszewski', 'Female', '721-110-1944', 'Russia'),
('fc0f47fb-869f-4d49-a575-347b1ad4672a', 'Emory', 'Corbould', 'Male', '397-871-9493', 'Greece'),
('a3c0abde-64ad-4f6a-893a-2e82ad2c68d6', 'Jessie', 'Cosgrave', 'Male', '994-763-7254', 'Palestinian Territory'),
('9485fb1d-2249-4b86-9223-efc1a267057b', 'Ewell', 'Mackinder', 'Male', '433-975-3625', 'Belarus'),
('0cef598f-9f8c-4a1d-bd83-1185d8fa8fef', 'Neall', 'Penhearow', 'Male', '723-820-8818', 'Portugal'),
('26a09ad1-da7d-4d29-bc9f-c9d077103aee', 'Clerissa', 'Seif', 'Female', '427-896-8410', 'China'),
('50609fec-258f-436e-8248-6b888047ee5d', 'Adriana', 'Gauntley', 'Genderqueer', '742-790-3884', 'Philippines'),
('3870ce65-32eb-44e7-bde0-f1a3f2f9a5f3', 'Brew', 'Janosevic', 'Male', '971-983-7422', 'Sweden'),
('0a6a7cd2-78d7-4877-87e6-7cea783a09bf', 'Danit', 'Casford', 'Female', '562-611-3428', 'Tanzania'),
('534b5510-c653-4f91-b32b-d353aa905553', 'Wilow', 'Ervine', 'Female', '847-906-5816', 'Indonesia'),
('429e8c39-e5ef-4e5f-8cd4-9e26c9844112', 'Chrysa', 'Valentine', 'Bigender', '217-277-7545', 'Macedonia'),
('2cc7ee8e-ed34-4eee-bb75-1f584d2a2e91', 'Bryanty', 'Anniwell', 'Male', '913-984-4608', 'United States'),
('dda1e059-f6f2-4c9b-8d57-dfa5bf03b99a', 'Tiler', 'Kedge', 'Male', '490-810-8244', 'Indonesia'),
('3ddc2e85-f467-4952-8670-5f0bf5d13434', 'Evangelina', 'Golston', 'Female', '563-370-6863', 'Iceland'),
('25a826eb-aaff-49c3-953e-a7e5d9483f2f', 'Xever', 'Le Maitre', 'Male', '894-834-6843', 'Czech Republic'),
('6cee6430-92ad-4107-b1fe-3eb4889cf691', 'Giselbert', 'Wiffen', 'Male', '218-896-7438', 'Japan'),
('edc8f309-9032-4aa0-8eb9-7b7bd82c906b', 'Cass', 'Pick', 'Male', '518-464-1753', 'Russia'),
('69e283d1-53b7-4977-9de1-80fb778ab130', 'Brett', 'Walford', 'Male', '852-565-1283', 'Democratic Republic of the Congo'),
('da1d1215-f96e-4b27-a522-8632d2ba81b4', 'Andy', 'Bulfoot', 'Female', '337-404-3345', 'Russia'),
('d7f48d1f-c46c-4cd0-ac5c-74e2012c4850', 'Garwin', 'Dallin', 'Male', '116-344-6469', 'Madagascar'),
('a395d8c2-c29a-4610-b781-a5c1f838cdf4', 'Evey', 'Linggard', 'Female', '444-273-9867', 'Philippines'),
('2deb287d-0808-4e16-a8c8-e43827673956', 'Rowan', 'McDavitt', 'Male', '669-278-8495', 'Poland'),
('1d4d5e67-5688-430e-8993-9de1f0d35974', 'Devon', 'Slucock', 'Female', '642-155-4373', 'China'),
('34c56eec-4018-40dd-83ee-31fc292d162e', 'Norris', 'Humpherson', 'Male', '137-286-1565', 'Russia'),
('ece06fd9-f5fe-40ed-961f-166b2130fb7b', 'Dynah', 'Denness', 'Female', '829-646-9813', 'Russia'),
('3712603b-33e9-4047-a808-f085d82fe9c3', 'Arel', 'Wintersgill', 'Male', '187-439-2617', 'Austria'),
('22c8a8dd-b47a-42b5-89aa-ff5b81a486df', 'Corrie', 'Taggett', 'Female', '883-503-0821', 'France'),
('e8c3a0ff-6aa6-49ae-a170-82af87ccfd45', 'Claudetta', 'Sandyford', 'Female', '313-963-1797', 'Russia'),
('db4e4ed2-0abb-4eef-bde4-0961f74d31db', 'Slade', 'Patek', 'Genderqueer', '175-759-4243', 'Czech Republic'),
('3274abb8-fc90-4165-978e-6ca9d7c63dc7', 'Agosto', 'How', 'Male', '935-190-7662', 'South Africa'),
('b3dc0fb3-aeaf-4dce-86ea-0ab4fce48d11', 'Gregorius', 'McDonald', 'Male', '828-756-2800', 'Peru'),
('92e96cac-0349-47cf-b2e4-d05f37610723', 'Cordey', 'Wallsam', 'Female', '204-333-4018', 'Kuwait'),
('047b2635-5dc3-4741-8acb-db6fff498843', 'Arlee', 'Wain', 'Female', '819-170-8013', 'San Marino'),
('433358f3-b5f9-4d8a-b8f2-437dbdcbaef4', 'Warden', 'Kettlestring', 'Male', '254-525-8967', 'France'),
('a6fad1d8-581f-47be-b30f-676e27f03fc3', 'Mycah', 'Cicutto', 'Male', '730-805-3269', 'China'),
('568925c3-ab90-47a7-9f77-1bc643479267', 'Bealle', 'Jaye', 'Male', '994-974-4473', 'Philippines'),
('44ea7e4e-a968-484c-8e2c-44f116393220', 'Maryjo', 'Collerd', 'Female', '734-386-0140', 'Angola'),
('4fc5dc75-34bc-4a8d-bef0-93ba40767c75', 'Tallulah', 'Levane', 'Female', '935-949-7441', 'Cuba'),
('69bddd16-b20b-4560-8e25-16fc34ae61a3', 'Izak', 'Vermer', 'Male', '507-198-0026', 'China'),
('3cfcceab-ec79-41ef-9cd4-38d5e6bef7a3', 'Evered', 'Peter', 'Male', '192-113-8512', 'China'),
('e732525b-2a98-4c71-a23c-92710f06758c', 'Kinna', 'Dwerryhouse', 'Female', '126-605-2325', 'Pakistan'),
('33278f94-9224-4aed-a2fa-a1a7cda62390', 'Emlynn', 'Weldon', 'Female', '435-625-1482', 'Colombia'),
('50ac8e79-558f-4684-a4e1-27b62a2f3b10', 'Tony', 'Caine', 'Male', '978-570-9138', 'Indonesia'),
('9586c7a7-61a3-4362-8714-a23a5f29b3e7', 'Lolly', 'Flecknell', 'Female', '421-593-9925', 'Indonesia'),
('afbe4a39-2895-44fa-bd6d-d85701d10bb7', 'Rhonda', 'Janiak', 'Female', '360-568-8262', 'United States'),
('257884ae-0f8b-495e-97b5-14bd5e96a2d5', 'Anatola', 'Sharples', 'Female', '801-515-5216', 'France'),
('1587d1c3-4826-4fe5-867a-0844c2d1c75b', 'Budd', 'Revie', 'Male', '712-391-2610', 'China'),
('70d8fcd5-a4d8-4041-8c64-b1291ecb2c99', 'David', 'Priscott', 'Male', '268-107-7999', 'Philippines'),
('695f5d57-4358-4687-aae4-4ff1e2873fc1', 'Joyce', 'Pennrington', 'Female', '922-381-3622', 'China'),
('b1d6935a-249b-4ccd-8670-0bbed6ff068f', 'Lief', 'Caudwell', 'Male', '207-105-0654', 'Poland'),
('059bc200-0113-4087-aa09-7c84d1c6ddab', 'Culver', 'Dashwood', 'Male', '235-673-5575', 'Poland'),
('b5796868-7e19-4989-aaa9-7012511da302', 'Charla', 'Lydiate', 'Female', '145-734-0803', 'China'),
('5c08badc-cffd-4dbc-ab7f-88fc3383d844', 'Gene', 'Cliburn', 'Male', '181-453-2924', 'France'),
('51ab1131-4e16-44dd-9fb4-b8481ab430b6', 'Beatrice', 'Moakler', 'Genderfluid', '573-705-7199', 'East Timor'),
('a53e3681-6bef-45fe-aed6-64fb2861c991', 'Maribeth', 'Stoppe', 'Female', '467-971-6623', 'Indonesia'),
('974907d3-d5f7-4721-9644-71d3d8cfff0b', 'Anetta', 'Lung', 'Female', '883-278-5443', 'Russia'),
('bc027bee-628e-4601-9680-9cf1eb7a6985', 'Mignon', 'Hamel', 'Female', '169-780-0965', 'Greece'),
('b30017b0-d662-4d82-a716-a1ec6ed3b03a', 'Dallis', 'Fouldes', 'Non-binary', '172-340-5761', 'France');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
