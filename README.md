# Laravel Weather App

This is a Laravel-based weather application that uses [WeatherAPI](https://www.weatherapi.com/) to fetch weather data.

## Prerequisites

Before starting, make sure you have installed PHP (>= 8.0), Composer, Node.js (>= 14.x), npm, and SQLite (optional if using SQLite database).

## Installation and Setup

Run the following commands in your local terminal:
```
composer install
npm install
New-Item .env -ItemType File
```

## Add the following content to your .env file:
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost
VTE_WEATHER_API_KEY=

DB_CONNECTION=sqlite
DB_DATABASE=:memory:

SESSION_DRIVER=array
CACHE_DRIVER=array
```
## Generate the application key:
```
php artisan key:generate
```

## Go to https://www.weatherapi.com/, create an account, log in, and copy your API key. Paste it into your .env file:
```
VTE_WEATHER_API_KEY=[your-api-key]
```

## Optimize the Laravel application:
```
php artisan optimize

```

## Build frontend assets:
```
npm run build
```

## Start the development servers:( run in individual terminal)
```
npm run dev
```
```
php artisan serve
```
## The app should now be accessible at http://localhost:8000.

## Contact

For any issues, contact: mahadi.cse.21@gmail.com
