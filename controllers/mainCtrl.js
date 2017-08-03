//Pull from the user.js & skillz file!
const {user} = require('../user');
const {skillz} = require('../skillz');
const {secrets} = require('../secrets')
//Functions to export to the end points!
module.exports = {
    getName(req,res,next) {
        res.status('200').json(user.name)
    },
    getLocation(req,res,next) {
        res.status('200').json(user.location)
        
    },
    getOccupations(req,res,next) {
        res.status('200').json(user.occupations)
        
    },
    getOccupationLatest(req,res,next) {
        res.status('200').json({"Latest Occupation": user.occupations[user.occupations.length-1]})
    },
    getHobbies(req,res,next) {
        res.status('200').json(user.hobbies);
    },
    getHobbiesByType(req,res,next) {
        console.log(req.params)
        const kitkats = user.hobbies.filter((x) => req.params.type.toLowerCase() === x.type.toLowerCase())
        res.status('200').json(kitkats);
    },
    getFamily(req,res,next) {
        res.status('200').json(user.family);
    },
    getFamilyByGender(req,res,next) {
        const katkat = user.family.filter((x)=> req.params.gender.toLowerCase() === x.gender.toLowerCase());
        res.status('200').json(katkat);
        
    },
    getRestaurants(req,res,next) {
        if(req.query.rating>0) {
            const kath = user.restaurants.filter((x)=> x.rating >=req.query.rating)
            res.status('200').json(kath)
            return;
        }
        res.status('200').json(user.restaurants)
    },
    getRestaurantsByName(req,res,next) {
        if(req.params.name) {
            const sar = user.restaurants.filter((x) => x.name.includes(req.params.name))
            res.status('200').json(sar);
        }
    },
    getSkillz(req,res,next) {
        if(req.query.experience) {
            const katz = skillz.filter((x)=> req.query.experience.toLowerCase() == x.experience.toLowerCase());
            res.status('200').json(katz);
        }
        else {
            res.status('200').json(skillz);
        }
    },
    getDaChoppa(req,res,next) {
        res.status('200').json(secrets)
    },
    changeName(req,res,next) {
        if(req.body.name) {
            user.name = req.body.name;
            res.status('200').json(user.name)
        }
        res.status('403').json('Invalid Entry');

    },
    changeLocation(req,res,next) {
        if(req.body.location) {
            user.location = req.body.location;
            res.status('200').json(user.location);
        }
        res.status('403').json('Invalid Entry');

    },
    addHobbies(req,res,next) {
        if(req.body.name && req.body.type) {
            user.hobbies.push(req.body);
        }
        res.status('200').json(user.hobbies);
    },
    addOccupations(req,res,next) {
        if(req.body.occupations) {
            user.occupations.push(req.body.occupations);
        }
        res.status('200').json(user.occupations);
    },
    addFamily(req,res,next) {
        if(req.body.name && req.body.relation && req.body.gender) {
            user.family.push(req.body);
            res.status('200').json(user.family);
        }
        res.status('403').json("Invalid Entry");
    },
    addRestaurants(req,res,next) {
        if(req.body.name && req.body.type && req.body.rating) {
            user.restaurants.push(req.body);
            res.status('200').json(user.restaurants);
        }
        res.status('403').json("Invalid Entry")
    },
    addSkillz(req,res,next) {
        if(req.body.name && req.body.experience) {
            skillz.push(req.body);
            res.status('200').json(skillz);
        }
        res.status('403').json('Invalid Entry');
    }
}