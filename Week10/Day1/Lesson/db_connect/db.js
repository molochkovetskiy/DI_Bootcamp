const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
        host: 'lucky.db.elephantsql.com',
        port: 5432,
        user: 'eqrdjhcs',
        password: 'nfFmkcxqQynyq-Wwqf0KFbEq4LhZqZyx',
        database: 'eqrdjhcs'
    }
});

const register = async () => {
    const trx = await db.transaction();
    try {
        const user = await db('users')
            .insert(
                {
                    username: 'bbb',
                    email: 'bbb@gmail.com'
                },
                ['username', 'email']
            )
            .transacting(trx);

        console.log('user=>', user);

        const hashpwd = await db('hashpwd')
            .insert(
                {
                    username: user[0].username,
                    password: '123456'
                },
                ['password', 'username'])
            .transacting(trx);

        console.log('hashpwd=>', hashpwd);

        await trx.rollback();
        // await trx.commit();
    } catch (err) {
        await trx.rollback();
    }
};

register();

// db.select('id', 'name', 'price').from('products')
// db('products')
//     .select('id', 'name', 'price')
//     .orderBy('name')
// .where({ id: 4 })
// .update({ name: 'iPhone14' }, ['name'])
// .insert([
//     { name: 'iTable', price: 200 }
// ], ['id', 'name'])
// .returning('*')
// db.raw('SELECT id, name, price FROM products WHERE id > ?', [3])
//     .then(data => {
//         console.log(data.rows);
//     })
//     .catch(err => {
//         console.log(err);
//     });