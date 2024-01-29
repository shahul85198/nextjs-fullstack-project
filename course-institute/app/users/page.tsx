<<<<<<< HEAD
=======
//import { PrismaClient } from 'prisma/prisma-client'
import { Button, Card, CardBody, CardHeader, CardFooter, Typography } from '@/ui'
>>>>>>> 73ed02fa8b95bc91d39d2b549c0b9dfab4e18d7b

<<<<<<< HEAD
=======
/* async function getUsersList() {
    const db = new PrismaClient();
    const list = await db.user.findMany({
        where: {
            name: "shahul"
        }
    });
    return {
        users: list
    }
} 
*/
export default async function Page() {
   // const users = await getUsersList();
    return <section className="p-4">
        <h2>Users</h2>
        <Button>Material Button</Button>
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
        </Card>
       {/* <pre>{JSON.stringify(users, null, 2)}</pre> */} 
    </section>
}
>>>>>>> 73ed02fa8b95bc91d39d2b549c0b9dfab4e18d7b