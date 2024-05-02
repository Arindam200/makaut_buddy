import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'

import { handle } from 'hono/vercel'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
	Bindings: { 
		DATABASE_URL: string
		SECRET : string
	}
}>();


export const runtime = "edge"

// EVERY ENDPOINT REQUIRES AN AUTHORIZATION HEADER


//endpoint : /getResource
//accepts : query - {sub : subject} 
//returns : status 200 - {
//   "documents": [
//     {
//       "id": "662d114e02c841399e95c104",
//       "sem": "1",
//       "subject": "Mathematics",
//       "type": "video",
//       "heading": "Introduction to Matrices 1",
//       "description": " What is matix?, How to calculate Determinants?,Types of Determinants, Minor & Cofactors, and Properties of Determinants",
//       "link": "https://www.youtube.com/watch?v=b-UZJVdLbXc&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=1"
//     },
//     {
//       "id": "662d185e02c841399e95c105",
//       "sem": "1",
//       "subject": "Mathematics",
//       "type": "video",
//       "heading": "Introduction to Matrices 2",
//       "description": "Numericals on Determinants, Types of Matrices and Multiplication of Matrices & its properties ",
//       "link": "https://www.youtube.com/watch?v=OWykXurjpFU&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=2"
//     },
//     {
//       "id": "662d3b3dc2418561ae5396a0",
//       "sem": "1",
//       "subject": "Mathematics",
//       "type": "video",
//       "heading": "Introduction to Matrices 2",
//       "description": "Numericals on Determinants, Types of Matrices and Multiplication of Matrices & its properties ",
//       "link": "https://www.youtube.com/watch?v=OWykXurjpFU&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=2"
//     }
//   ]
// } , 
// status 403 - {error}
app.get('/getResource', async (c) => {
	
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const token = c.req.header("Authorization").replace("Bearer-" , "");
	const secret = c.env?.SECRET;

	if(token === secret){
		
		const subject = c.req.query('sub');


		try {
			const documents = await prisma.resource.findMany({
				where: {
				subject : subject
				},
			})
			
			return c.json({ documents : documents } , 200);
		} catch(e) {
			c.status(403);
			return c.json({ error: e });
		}
	}else{
		
		return c.json({boo : "hoo" , jokes : "on you !"} , 400)
	}
})

//endpoint : /createResource
//accepts : body - {sem , subject , type , heading , description , link} 
//returns : status 200 - {document : {id , sem , subject , type , heading , description , link}] , status 403 - {error}
app.post('/createResource', async (c) => {

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const token = c.req.header("Authorization").replace("Bearer-" ,"");
	const secret = c.env?.SECRET;

	if(token === secret){

		try {
			const document = await prisma.resource.create({
				data: body
			});
			
			return c.json({ document });
		} catch(e) {
			c.status(403);
			return c.json({ error: e });
		}
	}else{
		return c.json({boo : "hoo" , jokes : "on you !"} , 400)
	}
})


//endpoint : /updateResource
//accepts : body - {sem , subject , type , heading , description , link} , params - {id} 
//returns : status 200 - {document : {id , sem , subject , type , heading , description , link}} , status 403 - {error}
app.put('/updateResource/:id', async (c) => {

	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const {id} =  c.req.param();
	const body = await c.req.json();
	const token = c.req.header("Authorization").replace("Bearer-" , "");
	const secret = c.env.SECRET;

	if(token === secret){

		try {
			
			const document = await prisma.resource.update({
				where: {
				id : id
				}, 
				data : body
			})        
			
			return c.json({ msg : "updated successfully" , data : document} , 200);
		} catch(e) {
			c.status(403);
			return c.json({ error: e });
		}
	}else{
		return c.json({boo : "hoo" , jokes : "on you !"} , 400)
	}
});


//endpoint : /createResource
//accepts : params - id 
//returns : status 200 - {document : [{id , sem , subject , type , heading , description , link}]} , status 403 - {error}
app.delete('/deleteResource/:id' , async(c) => {
	
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const {id} = c.req.param();
	const token = c.req.header("Authorization").replace("Bearer-" , "");
	const secret = c.env?.SECRET;
	
	if(token === secret){

			try {
				
				const document = await prisma.resource.delete({
					where: {
					id : id
					}
				})        
				
				return c.json({ msg : "deleted successfully" , data : document} , 200);
			} catch(e) {
				c.status(403);
				return c.json({ error: e });
			};
	}else{
		return c.json({boo : "hoo" , jokes : "on you !"} , 400)
	}

})


export default app as never
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)

