import { builder } from '../builder'
import { prisma } from '../db'

builder.prismaObject('Todo', {
    fields: t => ({        
        id: t.exposeID("id"),
        name: t.exposeString("name"),
    })
})

builder.queryField('Todos', (t) => 
    t.prismaField({
        type:['Todo'],
        resolve: async (query,root, args,ctx,info) => {
            return prisma.todo.findMany({...query})
        }
    })
)