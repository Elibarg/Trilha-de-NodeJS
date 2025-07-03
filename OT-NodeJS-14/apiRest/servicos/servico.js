import colecaoUf from "../dados/dados";

export const buscarUfs = () =>{
    return colecaoUf
};

export const buscarUfPorNome = (nomeUf) =>{
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const iduf = parseInt(id);
    return colecaoUf.find(uf => uf.id === iduf);
};