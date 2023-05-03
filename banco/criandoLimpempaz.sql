create database IF NOT EXISTS limpempaz;
use limpempaz;

create table IF NOT EXISTS TaskCards(

id_card int not null auto_increment,
nome varchar(50),
img text,
rating int,
duracao time,
usuario varchar(50),
primary key (id_card)
);