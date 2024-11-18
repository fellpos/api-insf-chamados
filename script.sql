create database db_pedroca;
use db_pedroca;

CREATE TABLE tb_usuarios (
id_usuario		int primary key auto_increment,
nm_usuario		varchar(255),
ds_senha		varchar(255)
);

CREATE TABLE tb_insf_chamados(
id_chamado			int primary key auto_increment,
nm_titulo			varchar(200),
ds_informacoes		varchar(500),
ds_impacto			varchar(50),
dt_data_ocorrencia	date,
id_atribuido		int,
foreign key (id_atribuido) references tb_usuarios (id_usuario)	
);

