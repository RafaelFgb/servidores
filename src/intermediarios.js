const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.send('A senha nao foi informada');
    }
    if (senha !== 'carros123') {
        return res.send('A senha está incorreta');
    }

    next();
}

module.exports = {
    validarSenha
}