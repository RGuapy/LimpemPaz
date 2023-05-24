create database IF NOT EXISTS limpempaz;
use limpempaz;

create table IF NOT EXISTS taskcards(

id_card int not null auto_increment,
nome varchar(50),
img text,
rating int,
duracao time,
usuario varchar(50),
primary key (id_card)
);


insert into taskcards(nome,img,rating,duracao,usuario)
values
('Teste1',
'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
3,
'00:30:00',
'usuario1'),

('Teste2',
'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
5,
'00:40:00',
'usuario1');