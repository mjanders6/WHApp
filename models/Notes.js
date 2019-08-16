module.exports = (sequelize, Sequelize) => {
    class Notes extends Sequelize.Model { }
    Notes.init(
        {
            note: {
                // restrictions
                type: Sequelize.STRING,
                notNUll: true
            }
        },
        {
            sequelize,
            modelName: 'notes'
        }
    )

    return Notes
}
