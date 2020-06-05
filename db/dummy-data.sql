insert into users1 (username, password, profile_pic)
values
('BobsGobs', 'BobsGobsPassword', 'BobsGobsPfP'),
('CuriosGeorge', 'CuriousGeorgePassword', 'CuriousGeorgePfP'),
('Frederick', 'FrederickPassword', 'FrederickPfP');

insert into posts (title, img, content, author_id)
values
('Happy Post', ':)', 'Today was a fun day!', 1),
('Sad Post', ':(', 'My friend moved to the other side of the world.', 1),
('Mad Post', '>:(', 'I was fired from work today!', 2),
('Rant Post', '>:O', 'People need to stop doing such and such because of such and such!!!', 2),
('Silly Post', ':P', 'This is a joke', 3),
('Selling Post', '$$$', 'I am selling my car.', 3);