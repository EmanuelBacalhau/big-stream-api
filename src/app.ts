import fastifyCors from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { categoryRoutes } from 'routes/category.route'
import { userRoutes } from 'routes/user.route'

export const app = fastify()

app.register(fastifyCors)

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(userRoutes, { prefix: 'api' })
app.register(categoryRoutes, { prefix: 'api' })
