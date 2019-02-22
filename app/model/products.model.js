module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('product', {
            product_id: {
                type: Sequelize.INTEGER,
                primaryKey: true
                },
            name: {
                type: Sequelize.STRING
                },
            description: {
            type: Sequelize.TEXT
            },
            price: {
                type: Sequelize.DECIMAL
            },
            discounted_price: {
                type: Sequelize.DECIMAL
            },
            image: {
              type: Sequelize.STRING
            },
            image_2: {
              type: Sequelize.STRING
            },
            thumbnail: {
              type: Sequelize.STRING
            },
            display: {
              type: Sequelize.INTEGER
            },

    
            
	},{
        freezeTableName: true,
        timestamps: false,


        // defining the table's name
        tableName: 'product'
    });
	
	return Product;
}