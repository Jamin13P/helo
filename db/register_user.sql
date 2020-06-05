insert into users1
(username, hash)
values
($1, $2)
returning *;