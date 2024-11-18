import con from "./connection";

export default async function inserirUser(user) {
    const comando = `
        INSERT INTO tb_usuario (nm_usuario, ds_senha)
        VALUES (?, ?)
    `

    let response = await con.query(comando, user.nome, user.senha);
    let info = response[0];

    return info.insertId;
}