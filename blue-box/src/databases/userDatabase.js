let users = [
    {
        id: 1,
        name: 'Admin',
        email: 'BlueBoxAdmin@BlueBox.com',
        username: 'admin',
        password: 'admin',
        cart: []
    },
    {
        id: 2,
        name: 'patrick',
        email: 'xxx@gmail.com',
        username: 'patrick',
        password: '1234',
        cart: [
            {
                id: 's1',
                title: 'Friends',
                year: '2021',
                price: 800,
                onSale: false
            }
        ]
    },
    {
        id: 3,
        name: 'jessica',
        email: '123@h0tmail.com',
        username: 'x',
        password: 'x',
        cart: [
            {
                id: 'm1',
                title: 'Yesman',
                year: '1993',
                price: 2.99,
                onSale: false
            },
            {
                id: 'm2',
                title: 'Noman',
                year: '0',
                price: 5,
                onSale: true
            }
        ]
    }
]

export default users