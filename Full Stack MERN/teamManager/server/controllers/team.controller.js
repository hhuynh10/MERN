const Pet = require('../models/team.model');

module.exports = {
    getAllTeams: (req, res) => {
        Pet.find()
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    getOneTeam:(req, res)=> {
        Pet.findById(req.params.id)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    addTeam:(req, res)=> {
        Pet.create(req.body)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    updateTeam:(req, res)=>{
        Pet.updateOne({_id:req.params.id}, req.body, {runValidators:true, new:true})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }, 

    deleteTeam:(req, res)=>{
        Pet.deleteOne({_id:req.params.id})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }
}