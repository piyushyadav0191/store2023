import {withItemData, statelessSessions} from "@keystone-next/keystone/session"
import {config, createSchema} from "@keystone-next/keystone/schema"
import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from "./schemas/ProductImage";
import 'dotenv/config' 
import { insertSeedData } from "./seed-data";



const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-damn-hotty-duck';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // how long they should signed
    secret: process.env.COOKIE_SECRET,
}

const {withAuth} = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // todo, add initial roles here 
    }
})

export default withAuth(config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        }
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
       async onConnect(keystone) {
            console.log('connected to the database')
            if(process.argv.includes('--seed-data')){

                await insertSeedData(keystone)
            }
        },
    }, 
    lists: createSchema({
        // schema items go in here 
        User,
        Product,
        ProductImage,
    }),
    ui: {
       //show ui only for people who pass this test
        isAccessAllowed: ({session}) => {
            // console.log(session)
            return !!session?.data
        },
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id`
    })
}))

