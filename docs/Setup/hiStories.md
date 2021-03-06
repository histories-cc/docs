---
sidebar_position: 1
---

# Setup HiStories


**Clone repository and install dependencies**
```bash
git clone https://github.com/hiStories-cc/hiStories
cd hiStories
```

**Setup environment**
```bash
docker-compose up -d
```

**Setup environmental variables**
```bash
cp .env.local.example .env.local
cp nodemon.json.example nodemon.json
```
And change values in `.env.local` and `nodemon.json`

**Run Next.js**
```bash
yarn install
yarn build
yarn dev
```

Now HiStories will be available at [http://localhost:3000](http://localhost:3000)

# Setup with Gitpod

Gitpod can provide fully initialized, perfectly set-up developer environmments for any kind of software project. 

#### [Open in Gitpod](https://gitpod.io/#https://github.com/hiStories-cc/hiStories)
