function getAllUsers(req, res){
    res.send('Sending all users...');
}

function getUserbyId(req, res){
     res.send(`Data for user: ${req.params.id}`)
}

module.exports = {getAllUsers, getUserbyId,};