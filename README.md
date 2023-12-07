# nextjs-fullstack-project


## to create net-js project
``` 
npx create-next-app@latest

```

## cd course-institute used to run server side
```
npx prisma init
```

## to run 
```
npx prisma studio
```

## to run nextjs
```
npm run dev
```

## here write in schema
```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Course {
  id      Int   @id @default(autoincrement())
  title   String
}
```

## then after migrate it
```
npx prisma migrate dev
```

```
npm i @material-tailwind/react
```
### tailwind.config.ts file
```
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

export default withMT(config)
```
