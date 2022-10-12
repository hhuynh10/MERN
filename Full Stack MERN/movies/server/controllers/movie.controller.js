const Product = require('../models/movie.model');

module.exports = {
    getAllMovies: (req, res) => {
        Product.find()
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    getOneMovie:(req, res)=> {
        Product.findById(req.params.id)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    addMovie:(req, res)=> {
        Product.create(req.body)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    updateMovie:(req, res)=>{
        Product.updateOne({_id:req.params.id}, req.body, {runValidators:true, new:true})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }, 

    deleteMovie:(req, res)=>{
        Product.deleteOne({_id:req.params.id})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }
}