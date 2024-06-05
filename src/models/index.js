const Article = require("./Article")
const Author = require("./Author")
const City = require("./City")
const Country = require("./Country")

Article.belongsTo(Author) //! Un articulo pertenece a un Author -> authorId (esto en la table de aticulos) 
Author.hasMany(Article) //! Un author tiene muchos articles


City.belongsTo(Country) // cities -> countryId
Country.hasMany(City)