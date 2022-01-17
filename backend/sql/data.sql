-- Populate Your Tables Here --
DELETE FROM account;
INSERT INTO account (userInfo) VALUES ('{"email": "molly@books.com","password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y", "name": "Molly Member"}');

DELETE FROM listing;
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80", "description": "BMW 435i Good Condition Used"}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://images.hgmsites.net/hug/mercedes-benz-s600-guard_100475149_h.jpg", "description": "Mercedes Benz S600 New Perfect Condition"}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-m5-cs-109-1611684117.jpg?crop=0.708xw:0.798xh;0.0865xw,0.115xh&resize=640:*", "description": "BMW M5 Good Condition Used"}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://wallpaperaccess.com/full/2194265.png", "description": "Octane Good Condition Can go Really fast"}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://cars.usnews.com/static/images/Auto/izmo/i159614730/2022_toyota_4runner_angularfront.jpg", "description": "Toyota 2022 4Runner New Condition"}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://media.ed.edmunds-media.com/toyota/rav4-hybrid/2019/oem/2019_toyota_rav4-hybrid_4dr-suv_limited_fq_oem_1_1600.jpg", "description": "Toyota 2020 RAV4 Used Condition"}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2021/09/2022_Toyota_Tundra_Limited_01-1500x900.jpg", "description": "Toyota Tundra 2022 New"}');
INSERT INTO listing (imageInfo) VALUES ('{"imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-ford-f-150-hybrid-lariat-117-1605761615.jpg", "description": "Ford F-150 2021 Like New"}');
