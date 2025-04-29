window.app.factory("SchoolServices", function(){
    let users = JSON.parse(localStorage.getItem('users')) || [
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Macelo',
            tipo: 'aluno',
            date: new Date()
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Karol',
            tipo: 'professor',
            date: new Date()
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Vinicius',
            tipo: 'aluno',
            date: new Date()
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Felipe',
            tipo: 'professor',
            date: new Date()
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Luan',
            tipo: 'aluno',
            date: new Date()
        },

    ];

    return {
        getUsers(){
            return users;
        },

        addUsers(nome, tipo){
            users.push(
                {
                    id: Math.random().toString(36).substring(2, 9),
                    nome,
                    tipo,
                    date: new Date()
                }
            );
            localStorage.setItem('users', JSON.stringify(users));
        },

        searchUser(userName){
            const findUser = users.find((user) => {
                return user.nome.toLowerCase() === userName.toLowerCase();
            })

            const imgReturn = findUser.tipo === 'aluno' ? 'assets/images/education.png' : 'assets/images/teacher.png';
            
            return {findUser: findUser, imgReturn: imgReturn};
        },

        removeUser(userid){
            users = users.filter((user) => {return user.id !== userid});
            localStorage.setItem('users', JSON.stringify(users));
        }
    }   
})