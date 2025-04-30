window.app.factory("SchoolServices", function(){
    let users = JSON.parse(localStorage.getItem('users')) || [
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Macelo',
            tipo: 'aluno',
            date: new Date(),
            email: 'macelo@macelo.com'
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Karol',
            tipo: 'professor',
            date: new Date(),
            email: 'karol@karol.com'
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Vinicius',
            tipo: 'aluno',
            date: new Date(),
            email: 'vini@vini.com'
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Felipe',
            tipo: 'professor',
            date: new Date(),
            email: 'felipe@felipe.com'
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            nome: 'Luan',
            tipo: 'aluno',
            date: new Date(),
            email: 'luan@luan.com'
        },

    ];

    return {
        getUsers(){
            return users;
        },

        addUsers(nome, tipo, email){
            return new Promise((resolve, reject) => {
                try{
                    setTimeout(() => {
                        const newuser = {
                                id: Math.random().toString(36).substring(2, 9),
                                nome,
                                tipo,
                                date: new Date(),
                                email
                            };
                        users.push(newuser);
                        localStorage.setItem('users', JSON.stringify(users.map((user) => (
                            {id: user.id, nome: user.nome, tipo: user.tipo, date: user.date, email: user.email}))));
                        resolve(newuser);
                    }, 5000);
                }catch (error){
                    reject(error);
                }
            })
        },

        searchUser(userName){
            return new Promise((resolve, reject) => {
                try{
                    setTimeout(() => {
                        const findUser = users.find((user) => {
                            return user.nome.toLowerCase() === userName.toLowerCase();
                        })
                        
                        if (!findUser){
                            console.log('estou aqui') 
                            return resolve({findUser: findUser})
                        }
                        const imgReturn = findUser.tipo === 'aluno' ? 'assets/images/education.png' : 'assets/images/teacher.png';
                        
                        resolve({findUser: findUser, imgReturn: imgReturn});
                    }, 3000);
                }catch (error){
                    reject(error)
                }
            })
        },

        removeUser(userid){
            users = users.filter((user) => {return user.id !== userid});
            localStorage.setItem('users', JSON.stringify(users));
        }
    }   
})