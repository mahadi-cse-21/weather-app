<?php

use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WeatherController::class, 'showWeather'])->name('home');
Route::get('/weather2', [WeatherController::class, 'showWeather']);
Route::post('/getweather', [WeatherController::class, 'getWeather'])->name('weather');

Route::get('/clear-cache', function() {
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('cache:clear');
    return 'Caches cleared!';
});
