const User =require('../assets/components/user')
const sqlite3 = require('sqlite3')
const path = require('path')
const dbName = path.join(__dirname,"../data","food.sqlite")

const db = new sqlite3.Database(dbName,err=>{
    if (err) {
        console.log(err.message);
    }else{
        console.log("connection a la base donnees food reussi")
    }
})

exports.createUser = (req,res)=>{
    // console.log("creation du user")
    // let valere = new User();
    // valere.nom = req.body.nom
    // valere.prenom = req.body.prenom
    // valere.dateNais = req.body.dateNais
    // valere.status = req.body.status
    // valere.profession = req.body.profession
    // valere.poids = req.body.poids
    // console.log(req.body.name);
    // console.log(req.body);
    let user = new User();
    var reponce = user.create(req.body.status, req.body.nom, req.body.dateNais, req.body.number, req.body.profession,res);
    if (reponce)
        console.log('User Created ...');
        res.render('index',{message:"utilisateur creer avec success"})
}

exports.historique = (req,res)=>{
    console.log("user history");
    var emerson = new User();
    var userId = req.query.userId
    console.log(req.query.userId)
    var historique = emerson.userHistorique(1)
    console.log("voici L\'historique",historique);
    res.send({historique:historique})
}


exports.connect = (request, response) => {
    response.
    console.log("connection du user en cours");
    console.log(request.body);
    if (request.body.nom === undefined || request.body.prenom == '' || request.body.prenom === undefined || request.body.nom == '') {
      response.render('pages/saveUser.ejs', { error: "OOPS :( un probleme est survenue" });
     //   response.redirect('/userConnect');

    }
    else {
        User.InsertData(request.body.nom, request.body.prenom, () => {
            response.render('pages/saveUser.ejs', { success: "Felicitation !!! Enregistrement effectuée ..." });

        })
    }
}

exports.login = (request, response) => {
    console.log("connection du user en cour");
    console.log(request.query);
    response.render('loginForm');
// , { success: "Felicitation !!! Enregistrement effectuée ..." }
    // if (request.body.nom === undefined || request.body.prenom == '' || request.body.prenom === undefined || request.body.nom == '') {
    //   response.render('pages/saveUser.ejs', { error: "OOPS :( un probleme est survenue" });
    //  //   response.redirect('/userConnect');

    // }
    // else {
       
    //     User.InsertData(request.body.nom, request.body.prenom, () => {
    //         response.render('pages/saveUser.ejs', { success: "Felicitation !!! Enregistrement effectuée ..." });

    //     })
    // }
}
exports.loginCheck = (request, response) => {
    console.log("connection du user en cour pout le check");
    console.log(request.query);
    response.render('plat');
// , { success: "Felicitation !!! Enregistrement effectuée ..." }
    // if (request.body.nom === undefined || request.body.prenom == '' || request.body.prenom === undefined || request.body.nom == '') {
    //   response.render('pages/saveUser.ejs', { error: "OOPS :( un probleme est survenue" });
    //  //   response.redirect('/userConnect');

    // }
    // else {
       
    //     User.InsertData(request.body.nom, request.body.prenom, () => {
    //         response.render('pages/saveUser.ejs', { success: "Felicitation !!! Enregistrement effectuée ..." });

    //     })
    // }
}