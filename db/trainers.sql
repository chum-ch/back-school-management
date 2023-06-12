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
-- Table structure for table `trainers`
--

CREATE TABLE `trainers` (
  `trainersID` varchar(40) DEFAULT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Province` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainers`
--

INSERT INTO `trainers` (`trainersID`, `FirstName`, `LastName`, `Gender`, `Phone`, `Email`, `Province`) VALUES
('171d3ea2-e5c8-4356-908c-ff5a2ef7cf33', 'ដារ៉ា', 'សុខ', 'ប្រុស', '០៩៦​ ១២ ៣៣ ៤៥៦', 'sok.dara@gmail.com', 'ព្រៃវែង'),
('9552ada4-e6ce-4f40-abbb-d8e59f898f4d', 'Sonya', 'Lovat', 'Female', '491-219-2058', 'slovat1@oaic.gov.au', 'China'),
('f484713c-a267-4091-b713-71a2046edcce', 'Beckie', 'Wildor', 'Female', '512-280-3370', 'bwildor2@dmoz.org', 'Poland'),
('51cb1f64-8522-49f1-8b02-588101784be8', 'Fred', 'Carl', 'Male', '130-568-0849', 'fcarl3@globo.com', 'Albania'),
('8d6cfd42-703a-40ed-a2c4-4633ab442bf2', 'Enoch', 'Pickthorn', 'Agender', '754-380-6582', 'epickthorn4@acquirethisname.com', 'China'),
('5cc74227-ca9b-4e1c-8a22-a6b087650ee3', 'Edsel', 'Jeaves', 'Male', '998-806-0420', 'ejeaves5@github.com', 'Honduras'),
('5623afbd-fea1-4594-b516-e549ac1c855d', 'Raynard', 'Geraudel', 'Bigender', '885-524-6128', 'rgeraudel6@ow.ly', 'Myanmar'),
('91511947-1a5a-4fd6-8e40-1666752d9c52', 'Moina', 'Binnall', 'Female', '476-163-0323', 'mbinnall7@unicef.org', 'China'),
('dc35a7b9-f37d-49f1-8a6f-80fb10d8aaa6', 'Zane', 'Dolligon', 'Male', '229-779-7400', 'zdolligon8@army.mil', 'United States'),
('93016cff-ab96-491a-86ad-a4ddff9739f3', 'Korella', 'Kipping', 'Female', '198-128-3885', 'kkipping9@ameblo.jp', 'Chile'),
('d6999d31-fc2e-49b9-9291-f076b945ea1f', 'Editha', 'Hacon', 'Female', '414-191-2329', 'ehacona@google.com.br', 'Czech Republic'),
('a5a8496a-b93b-449d-8388-644674adec21', 'Charin', 'Valance', 'Bigender', '979-123-2579', 'cvalanceb@ca.gov', 'Indonesia'),
('06e7e5d1-3941-4679-b3c8-6dfcd08917e6', 'Frayda', 'Sends', 'Female', '658-884-7283', 'fsendsc@eventbrite.com', 'Indonesia'),
('78a68ebf-a437-45a4-8f9f-fa85d7c609f7', 'Hollis', 'Kinsell', 'Male', '521-329-2263', 'hkinselld@discuz.net', 'Thailand'),
('40a74dd6-39b7-4689-b713-84e78ec5f1d6', 'Olvan', 'Silburn', 'Male', '124-918-7452', 'osilburne@furl.net', 'China'),
('0a279779-6e29-448f-a0b5-284b4bede74a', 'Lea', 'Mosson', 'Female', '100-101-7782', 'lmossonf@vimeo.com', 'Portugal'),
('21345cf9-0a1f-4bc2-af49-cbc90432e38e', 'Genevra', 'Desorts', 'Female', '995-138-7231', 'gdesortsg@merriam-webster.com', 'Portugal'),
('11442a93-9733-4f1a-ac68-ff5aed3c3655', 'Ulrikaumeko', 'Sallinger', 'Female', '743-149-1059', 'usallingerh@printfriendly.com', 'Somalia'),
('7caa8a29-afe2-4f86-92ad-d6b222356ef3', 'Elmo', 'Guyon', 'Male', '813-982-7497', 'eguyoni@webeden.co.uk', 'United States'),
('a761cb5d-bbc8-46eb-8128-4c767ac8737e', 'Ardath', 'Meier', 'Polygender', '742-302-4501', 'ameierj@yolasite.com', 'Mexico'),
('d481e881-9bd3-4af4-a33e-87597e7c7d26', 'Petronella', 'Chattoe', 'Female', '411-849-0569', 'pchattoek@scribd.com', 'Philippines'),
('6b95585a-f7f2-4b97-ac61-8a84d9d2347a', 'Guendolen', 'Weedenburg', 'Female', '402-864-3116', 'gweedenburgl@ihg.com', 'Sweden'),
('07f888a9-2404-40dc-9ad1-36b97c628a04', 'Freemon', 'O\' Liddy', 'Male', '255-130-5811', 'foliddym@microsoft.com', 'Portugal'),
('80c736b1-c567-409e-8f05-4e76664ffcc5', 'Orlando', 'Cullip', 'Genderqueer', '729-475-3707', 'ocullipn@kickstarter.com', 'Czech Republic'),
('d52d8108-1696-487b-9928-8047c9c0bf1f', 'Marcelle', 'Ivancevic', 'Female', '258-937-2925', 'mivancevico@ovh.net', 'China'),
('5db2e1ad-bffb-4b31-8c22-ed8480c7e0f7', 'Amii', 'Pryde', 'Female', '935-342-5329', 'aprydep@de.vu', 'Indonesia'),
('818adc12-39a8-4cb1-bf89-605175c280d9', 'Leupold', 'Marioneau', 'Male', '533-808-4458', 'lmarioneauq@newsvine.com', 'China'),
('d7b173a2-c4a0-4fcb-a65d-752a1c485274', 'Merle', 'Stack', 'Female', '448-639-2411', 'mstackr@feedburner.com', 'Portugal'),
('ce296230-d374-4d0a-b3b2-da909d9d9621', 'Maria', 'Noton', 'Female', '377-448-0987', 'mnotons@themeforest.net', 'Indonesia'),
('c7173e58-b1f6-40df-9fb9-5d33f4a114f0', 'Ximenez', 'Keuntje', 'Non-binary', '750-166-3254', 'xkeuntjet@oracle.com', 'Indonesia'),
('3ad68b40-ce6b-4df2-bd8c-9539a8792f39', 'Gardener', 'Clemetts', 'Male', '605-843-0446', 'gclemettsu@businesswire.com', 'Mexico'),
('91084ae5-c7db-42e5-8916-d957a2e158b6', 'Annabal', 'Smartman', 'Female', '708-758-6287', 'asmartmanv@sohu.com', 'Peru'),
('97eda0b6-e996-4adf-92e8-93d5c0f42bc3', 'Darren', 'Vasilkov', 'Male', '922-596-2521', 'dvasilkovw@parallels.com', 'Argentina'),
('1055e161-ba70-447c-8038-71e374fe07af', 'Jarvis', 'Castell', 'Male', '291-391-1044', 'jcastellx@dot.gov', 'Germany'),
('e9b7e742-193c-4c38-b618-c815068d2e6a', 'Ximenez', 'Eliot', 'Male', '375-323-5023', 'xelioty@bloomberg.com', 'Dominican Republic'),
('b3dc26e9-23d5-4080-893c-2fd57d5fc14b', 'Neils', 'Worsell', 'Male', '281-227-8921', 'nworsellz@ocn.ne.jp', 'Israel'),
('ee457cb1-90d7-42fa-9c24-aeb9ea7b0704', 'Donnell', 'Peddersen', 'Male', '171-122-3774', 'dpeddersen10@businessweek.com', 'Portugal'),
('51b843f1-d703-4419-b7bd-059ec89da683', 'Truda', 'Gayden', 'Female', '503-430-2461', 'tgayden11@hao123.com', 'Indonesia'),
('f13216a7-32c7-4f3e-8071-1c88de494fe2', 'Temp', 'Meneux', 'Male', '472-792-4007', 'tmeneux12@cloudflare.com', 'China'),
('984abdb4-2cd9-4a04-94a1-e196932a68bb', 'Stanleigh', 'Serot', 'Male', '515-197-3925', 'sserot13@goodreads.com', 'China'),
('653f7ae4-123f-411e-97a8-4df118535a80', 'Beale', 'Windley', 'Male', '850-444-6123', 'bwindley14@purevolume.com', 'France'),
('6b9036de-8218-4df5-bd89-ac7a9683a517', 'Julia', 'Coleby', 'Female', '787-510-0991', 'jcoleby15@si.edu', 'Indonesia'),
('92b2131d-fb68-4b3b-a851-e58bd746ff60', 'Pacorro', 'Dominik', 'Male', '508-145-0837', 'pdominik16@umn.edu', 'Vietnam'),
('01d42ea1-bbb3-47fe-b2d4-528686967da1', 'Kessiah', 'Ambrodi', 'Female', '871-342-1489', 'kambrodi17@about.com', 'Indonesia'),
('b99117c3-2bce-42c8-87c3-ae052949e125', 'Davon', 'Kenny', 'Male', '693-125-6356', 'dkenny18@infoseek.co.jp', 'Colombia'),
('3f539ccf-d966-4512-bccc-d8b47969df78', 'Page', 'Phinnis', 'Male', '356-356-2976', 'pphinnis19@youku.com', 'Sweden'),
('6e5637c5-1fa5-4110-be24-59e89d163cdc', 'Curtice', 'Wesley', 'Male', '717-488-7894', 'cwesley1a@fastcompany.com', 'Russia'),
('dd3428fc-ef76-49f1-b28f-52667a5a85a8', 'Jane', 'Kenwyn', 'Female', '463-799-2752', 'jkenwyn1b@upenn.edu', 'China'),
('f21c0a02-c1ce-4aa7-be61-11818bc48255', 'Parnell', 'O\'Donovan', 'Male', '518-107-6143', 'podonovan1c@patch.com', 'Canada'),
('c8508126-7c5f-4161-abf1-9311ff22053e', 'Virginie', 'Oneile', 'Female', '665-697-1786', 'voneile1d@samsung.com', 'Malaysia'),
('2d62ac6f-4ff4-494c-b8fc-9b85d566faad', 'Nefen', 'Bakeup', 'Male', '447-308-4186', 'nbakeup1e@twitter.com', 'Netherlands'),
('00af7537-98c1-48fb-ba86-92be102ce1e5', 'Caresa', 'McLelland', 'Female', '970-706-7278', 'cmclelland1f@woothemes.com', 'Guatemala'),
('6c6e9c3d-4c7b-45e1-9c40-debdfb432dd5', 'Ichabod', 'Spuffard', 'Male', '573-313-0005', 'ispuffard1g@spiegel.de', 'Russia'),
('c9a33f7e-cc90-4521-bf27-aa5959833e16', 'Modesty', 'Everington', 'Female', '732-546-1027', 'meverington1h@live.com', 'Philippines'),
('842ddcfc-52fb-4b70-becc-def4c6190c3f', 'Perl', 'Kupisz', 'Female', '451-984-3250', 'pkupisz1i@fda.gov', 'Portugal'),
('3624de44-6b8f-49ee-8980-fc1d1c198d73', 'Vidovik', 'McMinn', 'Male', '336-304-9353', 'vmcminn1j@yandex.ru', 'United States'),
('a2c764bc-cb89-4a3f-b02e-f08ec6952fe5', 'Vlad', 'Dugmore', 'Male', '903-613-2533', 'vdugmore1k@lycos.com', 'Ukraine'),
('7df59eeb-202b-4743-84a8-53351843821d', 'Gay', 'Aylott', 'Female', '268-585-6876', 'gaylott1l@netlog.com', 'Russia'),
('621d6d5b-d8e3-43f6-bac0-8c9493684fd5', 'Kippy', 'Iacovielli', 'Male', '691-220-8218', 'kiacovielli1m@yandex.ru', 'China'),
('940defba-1ea0-4f9d-8c28-3eb3a15a0091', 'Oren', 'Ligoe', 'Genderqueer', '267-245-5152', 'oligoe1n@plala.or.jp', 'Canada'),
('810b8c6b-90ca-4d43-ba56-136680e987b2', 'Allan', 'Floyed', 'Male', '557-802-0098', 'afloyed1o@china.com.cn', 'North Korea'),
('0e232517-ca23-496c-8bed-d2a3ca35c22c', 'Miles', 'Kervin', 'Male', '808-162-1624', 'mkervin1p@pagesperso-orange.fr', 'France'),
('a301f2f0-3616-409c-897d-f38ab6740045', 'Issiah', 'Bradnocke', 'Male', '864-318-0555', 'ibradnocke1q@bizjournals.com', 'Philippines'),
('cad4045d-7b7a-4ad9-8874-ca1d7cfefad0', 'Gib', 'Podbury', 'Male', '796-920-8495', 'gpodbury1r@creativecommons.org', 'Indonesia'),
('dab19b6e-5052-47a3-a1d1-019f024a05c9', 'Frances', 'Daville', 'Female', '199-791-5344', 'fdaville1s@moonfruit.com', 'Russia'),
('98fef84a-c2e5-482c-97f5-02f692c395a8', 'Tammy', 'Hovert', 'Female', '450-127-8763', 'thovert1t@canalblog.com', 'Dominican Republic'),
('d7a406aa-155d-4644-8e88-4604c31c4fb5', 'Jasmina', 'Studdert', 'Female', '949-994-2616', 'jstuddert1u@scientificamerican.com', 'Indonesia'),
('102845c0-e07f-47e4-a23e-15c158971016', 'Marjorie', 'McGarrie', 'Female', '862-816-6313', 'mmcgarrie1v@example.com', 'Russia'),
('a515ea19-74f6-4ccc-8361-72e97c277c77', 'Juliana', 'Auchterlonie', 'Female', '865-768-3717', 'jauchterlonie1w@bloomberg.com', 'France'),
('470704a4-7e50-4ed8-89c8-e94d8b9577c6', 'Edd', 'Lovelace', 'Male', '690-898-0670', 'elovelace1x@google.com.hk', 'Philippines'),
('fd609981-f074-4215-835a-be203f529e59', 'Faye', 'Hutable', 'Female', '630-527-9176', 'fhutable1y@globo.com', 'China'),
('83e0a8de-bd67-462e-994a-d9eca61baa7a', 'Gavin', 'Poll', 'Male', '370-920-6956', 'gpoll1z@auda.org.au', 'Syria'),
('e23cde88-9401-4c1d-9da8-a7a6611dc858', 'Franky', 'Biddulph', 'Genderfluid', '112-351-3817', 'fbiddulph20@shareasale.com', 'Mexico'),
('55fd4a33-9ab0-4b55-98f4-ce03a22eae38', 'Elisabet', 'Chamberlen', 'Female', '802-168-0269', 'echamberlen21@walmart.com', 'China'),
('54bf5dcb-d780-44b9-ba3e-347ddb290b1a', 'Lane', 'Massel', 'Female', '847-503-0439', 'lmassel22@pinterest.com', 'Colombia'),
('e889b751-6bce-4d4b-986e-bfedeed1041b', 'Tonia', 'Fronek', 'Genderqueer', '447-734-9745', 'tfronek23@seesaa.net', 'Malta'),
('c9820114-944f-4258-b040-d69a7c2d8889', 'Ed', 'Aicken', 'Male', '149-818-0607', 'eaicken24@liveinternet.ru', 'Indonesia'),
('ef74b179-4388-4fb0-ac79-103ee887d4c3', 'Tova', 'Jannex', 'Female', '956-691-2393', 'tjannex25@aboutads.info', 'China'),
('07b34a99-0e4a-4712-8613-b34289a20d08', 'Minna', 'Hill', 'Female', '688-490-9648', 'mhill26@livejournal.com', 'Philippines'),
('a9e7454f-2a4a-40d6-b56b-60c8b1b11191', 'Bernarr', 'Leddy', 'Male', '979-745-9362', 'bleddy27@blogs.com', 'Brazil'),
('b74bca5c-298f-4843-8c4a-06aca7c31c75', 'Joelle', 'Musla', 'Female', '487-815-1782', 'jmusla28@yahoo.com', 'China'),
('0f4ac95e-1081-4dc5-ba40-e7ba1917d5ba', 'Dionne', 'Anglim', 'Female', '795-958-8173', 'danglim29@wired.com', 'China'),
('6f38de84-2c61-4fd2-8e5b-e07a065a7fad', 'Eimile', 'Gaffon', 'Female', '713-870-9169', 'egaffon2a@hao123.com', 'United States'),
('1ca41891-c5fc-4ff1-a04a-148e0b561663', 'Maximilian', 'Maplethorpe', 'Male', '778-471-7692', 'mmaplethorpe2b@webeden.co.uk', 'Mexico'),
('ca67aacd-f3d1-4b8c-a23c-53e4097651a7', 'Fritz', 'Cuseck', 'Male', '315-771-8126', 'fcuseck2c@weibo.com', 'Iran'),
('9903bc28-0685-459b-9c4a-1ce60c7e4df8', 'Gilberte', 'Cranidge', 'Agender', '508-904-5925', 'gcranidge2d@jigsy.com', 'Croatia'),
('31b0d66f-c2e9-46af-80f2-a09525d6a60d', 'Mariana', 'Ponnsett', 'Female', '150-426-1756', 'mponnsett2e@taobao.com', 'Angola'),
('f72ba688-1dac-4159-9f91-e1f415c70848', 'Stearne', 'Stranaghan', 'Male', '232-272-0730', 'sstranaghan2f@hud.gov', 'Philippines'),
('3e6cf8a6-270c-475a-a98c-a326d386bdaf', 'Ernest', 'Fibbens', 'Male', '123-350-4075', 'efibbens2g@slate.com', 'Armenia'),
('44734e02-37a5-43a6-960e-dbe5a43454ce', 'Maggy', 'Speedin', 'Female', '971-869-8432', 'mspeedin2h@webnode.com', 'China'),
('a06478b6-1a90-49b3-98a4-f57839f0454f', 'Franklyn', 'Coil', 'Male', '624-394-2223', 'fcoil2i@statcounter.com', 'Poland'),
('25c15d94-96a7-4bd8-889f-e67c6857b6b8', 'Rayner', 'Brooksbank', 'Male', '500-838-0952', 'rbrooksbank2j@google.es', 'Russia'),
('c74f42a7-4d4c-4fa7-a309-521e17dc49b8', 'Richard', 'Romme', 'Male', '110-626-8973', 'rromme2k@quantcast.com', 'Peru'),
('6d02b177-3cf6-494f-9227-67adb90729ea', 'Gerhardine', 'Pockey', 'Female', '490-883-2571', 'gpockey2l@flickr.com', 'Tunisia'),
('5230e03a-0d44-4af6-9a73-ba0a09050a6f', 'Isabeau', 'Starkings', 'Female', '102-171-3455', 'istarkings2m@quantcast.com', 'Indonesia'),
('5b33d75a-ec39-45b0-b309-0e610be27e93', 'Hannis', 'Howatt', 'Non-binary', '382-446-2497', 'hhowatt2n@google.co.jp', 'Serbia'),
('31ac1b91-0cfa-4233-a3f5-61fc392abb8e', 'Seth', 'Howsin', 'Male', '146-205-2027', 'showsin2o@example.com', 'China'),
('fcf42982-60c9-4eb0-a5a9-ad9bfaf4613c', 'Urbanus', 'Waylett', 'Male', '146-117-4908', 'uwaylett2p@census.gov', 'Brazil'),
('95100123-2db0-4f5a-8759-2359504a109b', 'Forrester', 'Hamblett', 'Male', '630-922-7426', 'fhamblett2q@drupal.org', 'Russia'),
('4d5407ad-8b35-4ac2-acd8-dc86842ff031', 'Esta', 'Hew', 'Female', '153-855-6191', 'ehew2r@kickstarter.com', 'Indonesia'),
('STUDENT0f47293b7b8e41aa875e68087e0859d1', 'bb', 'dfd', 'dd', '0987654321', 'aa', 'dd');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
