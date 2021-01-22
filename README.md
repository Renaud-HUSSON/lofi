# LOFI MUSIC APP
This application lists all most watched lofi youtube lives in real time (almost we'll see why later), and provide a way to listen to them and switch quickly to another.

## HOW  IT IS WORKING
Every 15 minutes, my backend does an HTTP request to youtube API, and then updates my database with the lives, if there is an error in this process, it handles it so the database is never empty and always has songs

## HOW TO USE IT
Juste click on the play button in the bottom player, or go to the collection and click on a live thumbnail.
You can change few parameters in the menu sidebar, such as theme (dark or light) and enable the video or not in the songs details.

## TECHNOLOGIES I HAVE USED

- javasceipt (Reactjs)
- CSS (Tailwindcss)
- PostgreSQL
- Docker
- Nginx

## HOW TO MAKE IT RUN IF YOU WANT TO MAKE YOUR OWN VERSION

### clone the following [repository](https://github.com/Renaud-HUSSON/lofi):
```
git clone https://github.com/Renaud-HUSSON/lofi.git lofi-music-app
```

### change .env-sample in api and client with your own informations

### build docker-compose services
```
sudo docker-compose build
```

### run docker-compose
```
sudo docker-compose up
```

And that's it ! Now you can play with it and improve in the way you want