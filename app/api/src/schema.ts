import { builder } from './builder'

import './models/Todo'

builder.queryType({
    fields: (t) => ({

    })
})
// builder.mutationType({
//     fields: (t) => ({
        
//     })
// })

export const schema = builder.toSchema({})