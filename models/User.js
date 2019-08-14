module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model { }
    User.init(
        {
            username: {
                // restrictions
                type: Sequelize.STRING,
                notNUll: true
            },
            email: {
                // restrictions
                type: Sequelize.STRING,
                notNUll: true
            },
            password: {
                type: Sequelize.STRING,
                notNUll: true
            },
            loggedin: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        },
        {
            sequelize,
            modelName: 'user'
        }
    )

    return User
}
