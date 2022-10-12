const Product = require('../models/author.model');

module.exports = {
    getAllAuthors: (req, res) => {
        Product.find()
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    getOneAuthor:(req, res)=> {
        Product.findById(req.params.id)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    addAuthor:(req, res)=> {
        Product.create(req.body)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    updateAuthor:(req, res)=>{
        Product.updateOne({_id:req.params.id}, req.body, {runValidators:true, new:true})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }, 

    deleteAuthor:(req, res)=>{
        Product.deleteOne({_id:req.params.id})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }
}