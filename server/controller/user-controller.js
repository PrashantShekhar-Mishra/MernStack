
import User from '../schema/user-schema.js';

export const adduser = async (request,response) => {
    const user = request.body;

    const newUser = new User(user);

    try{
        await newUser.save();
        response.status(201).json(newUser);
    }
    catch(error) {
        response.status(409).json({message : error.message});   
    }
}


export const getUsers = async (request,response) => {
    try{
            const users = await User.find({});
            response.status(200).json(users);

    }
    catch(error) {
            response.status(400).json({message:error.message})
    }
}

export const getUser = async(request,response) => {
    try{
        const users = await User.findById(request.params.id);
        response.status(200).json(users);

    }
    catch(error) {
        response.status(400).json({message:error.message})
    }
}


export const editUser = async(request,response) => {
    let user = request.body;
    const editUser = new User(user);
    try{
        await User.updateOne({_id:request.params.id},editUser);
        response.status(200).json(editUser);

    }
    catch(error) {
        response.status(400).json({message:error.message})
    }
}


export const deleteUser = async(request,response) => {
    
    try{
          await User.deleteOne({_id:request.params.id}) ;
          response.status(200).json(deleteUser);
          
    }
    catch(error) {
        response.status(400).json({message:error.message});
    }

}