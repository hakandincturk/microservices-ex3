const CustomerService = require('../services/customer-service');
const  UserAuth = require('./middlewares/auth');

const { SubscribeMessage } = require('../utils')

module.exports = (app, channel) => {
    
    const service = new CustomerService();

    SubscribeMessage(channel, service)

    app.post('/signup', async (req,res,next) => {
        try {
            const { email, password, phone } = req.body;
            const { data } = await service.SignUp({ email, password, phone}); 
            return res.status(200).json({type: true, message: 'successful', data: data});
            
        } catch (err) {
            next(err)
        }

    });

    app.post('/login',  async (req,res,next) => {
        try {
            
            const { email, password } = req.body;
    
            const { data } = await service.SignIn({ email, password});

            return res.status(200).json({type: true, message: 'successfuly', data: data});

        } catch (err) {
            return res.status(403).json({type: false, message: `error, ${err.message}`});
        }

    });

    app.post('/address', UserAuth, async (req,res,next) => {
        
        try {
            
            const { _id } = req.user;
    
            const { street, postalCode, city,country } = req.body;
    
            const { data } = await service.AddNewAddress( _id ,{ street, postalCode, city,country});

            return res.status(200).json({type: true, message: 'successful', data: data});

        } catch (err) {
            next(err)
        }


    });
     

    app.get('/profile', UserAuth ,async (req,res,next) => {

        try {
            const { _id } = req.user;
            const { data } = await service.GetProfile({ _id });

            return res.status(200).json({type: true, message: 'successful', data: data});
            
        } catch (err) {
            next(err)
        }
    });
     

    app.get('/shoping-details', UserAuth, async (req,res,next) => {
        
        try {
            const { _id } = req.user;
           const { data } = await service.GetShopingDetails(_id);
    
           return res.status(200).json({type: true, message: 'successful', data: data});

        } catch (err) {
            next(err)
        }
    });
    
    app.get('/wishlist', UserAuth, async (req,res,next) => {
        try {
            const { _id } = req.user;
            const { data } = await service.GetWishList( _id);

            return res.status(200).json({type: true, message: 'successful', data: data});

        } catch (err) {
            next(err)
        }
    });
}