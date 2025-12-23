<!DOCTYPE html>
<html>
<head>
    <title>Laravel Weather App</title>
    <style>
        body { font-family: Arial; background: #eef; text-align: center; }
        .box { background: white; padding: 20px; width: 300px; margin: auto; }
    </style>
</head>
<body>

<div class="box">
    <h2>Weather App</h2>

    <form method="POST" action="{{ route('weather') }}">
        @csrf
        <input type="text" name="city" placeholder="Enter city" required>
        <br><br>
        <button type="submit">Check Weather</button>
    </form>

    @if(session('error'))
        <p style="color:red">{{ session('error') }}</p>
    @endif


    @if(isset($weather))
        <h3>{{ $weather['name'] }}</h3>
        <p>🌡️ Temp: {{ $weather['main']['temp'] }} °C</p>
        <p>☁️ Weather: {{ $weather['weather'][0]['description'] }}</p>
        <p>💧 Humidity: {{ $weather['main']['humidity'] }}%</p>
        <p>🌬️ Wind: {{ $weather['wind']['speed'] }} m/s</p>
    @endif
</div>

</body>
</html>
