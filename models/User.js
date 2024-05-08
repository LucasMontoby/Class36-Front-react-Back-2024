const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type : String, required: true, unique: true }, 
    email: { type : String, required: true, unique: true},
    password: {type :String ,required:true}
})

userSchema.pre('save', async function (next){
    const user = this;
    if (!user.isModified('password')) return next();
    try{
        const hashPassword = await bcrypt.hash(user.password, 10);
        user.password = hashPassword;
        next()
    } catch (error) {
        return next(error)
    }
});

const User = mongoose.model('User', userSchema);

module.export = User;