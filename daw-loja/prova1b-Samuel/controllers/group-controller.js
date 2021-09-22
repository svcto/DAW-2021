const repository = require('../models/group-repository')

module.exports = {
    index: (req, res) => {
        repository.find()
            .then( ret =>{
                return res.json(ret)
            })
            .catch( error => {
                res.status(500).json({message: error.message})
                console.log(ret)
            });
    },

    create: (req, res) => {
        const group = req.body;
        repository.create(group)
            .then( ret =>{
                return res.status(201).json(ret);
            })
            .catch( error => {
                res.status(500).json({message: error.message});
            });
    },

    show: (req, res) => {
        repository.findById(req.params)
            .then( ret => {
                if (ret.length === 0) {
                    return res.status(404).json({message: 'Not found'});
                }
                return res.json(ret)
            })
            .catch( error => {
                res.status(500).json({message: error.message});
            });
    },

    update: (req, res) => {
        const group = req.body;
        repository.findById(req.params)
        .then( ret => {
                if (ret.length === 0) {
                    return res.status(404).json({message: 'Not found'})
                }
                repository.update(group).then(ret => {
                    return res.json(ret)
                })
                .catch( error => {
                    res.status(500).json({message: error.message})
                    console.log(ret)
                });
            
            })
            .catch( error => {
                res.status(500).json({message: error.message})
                console.log(ret)
            });
    },

    delete: (req, res) => {
        repository.findById(req.params)
        .then( ret => {
                if (ret.length === 0) {
                    return res.status(404).json({message: 'Not found'})
                }
                repository.delete(req.params).then(ret => {
                    return res.json(ret)
                })
                .catch( error => {
                    res.status(500).json({message: error.message})
                    console.log(ret)
                });
            
            })
            .catch( error => {
                res.status(500).json({message: error.message})
                console.log(ret)
            });
    }
}