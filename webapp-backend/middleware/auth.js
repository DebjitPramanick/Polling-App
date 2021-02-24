import jwt from 'jsonwebtoken'

const authMiddleware = (req,res,next) => {
    
    const authorization = req.headers.authorization
    
    if (authorization){
        
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.SECRET || 'ThisIsASecret', (err, decoded) => {
            if(err){
                next(Error('Failed to authenticate token.'))
            }else{
                req.decoded = decoded
                next();
            }
        })
    }else{
        next(Error('No token provided.'))
    }
}


export default authMiddleware