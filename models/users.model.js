const { Schema, model } =  require('mongoose');

const usersSchema = Schema(
    {
        name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        login: {
            type: String,
            required: true
        },
        pass: {
            type: String,
            required: true
        },    
        rol: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            required: true
        }
    },{
        timestamps: true
    }
)

module.exports =  model('users' , usersSchema);