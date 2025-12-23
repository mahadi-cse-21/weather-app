<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class WeatherController extends Controller
{
    public function index()
    {
        return view('weather');
    }

    public function getWeather(Request $request)
    {
        $request->validate([
            'city' => 'required|string'
        ]);

        $city = strtolower(trim($request->city));

        // ✅ Cache weather data for 10 minutes
        return Cache::remember("weather_{$city}", 600, function () use ($city) {

            $response = Http::get(
                'https://api.openweathermap.org/data/2.5/weather',
                [
                    'q' => $city,
                    'appid' => env('WEATHER_API_KEY'),
                    'units' => 'metric'
                ]
            );

            // City not found
            if ($response->status() === 404) {
                return response()->json([
                    'error' => 'City not found'
                ], 404);
            }

            // API key invalid / rate limit / server error
            if ($response->failed()) {
                return response()->json([
                    'error' => 'Weather service unavailable'
                ], 503);
            }

            $weather = $response->json();
            return response()->json($weather);
        });
    }

    public function showWeather()
    {
        return view('weather2');
    }
    
}
