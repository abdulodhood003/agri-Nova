// Weather module - handles all weather-related functionality

// District data for each state
const districtData = {
    'kerala': [
        { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', emoji: '🏛️' },
        { id: 'kollam', name: 'Kollam', emoji: '🌊' },
        { id: 'pathanamthitta', name: 'Pathanamthitta', emoji: '⛰️' },
        { id: 'alappuzha', name: 'Alappuzha', emoji: '🚤' },
        { id: 'kottayam', name: 'Kottayam', emoji: '📚' },
        { id: 'idukki', name: 'Idukki', emoji: '🏔️' },
        { id: 'ernakulam', name: 'Ernakulam', emoji: '🏙️' },
        { id: 'thrissur', name: 'Thrissur', emoji: '🎭' },
        { id: 'palakkad', name: 'Palakkad', emoji: '🌾' },
        { id: 'malappuram', name: 'Malappuram', emoji: '🕌' },
        { id: 'kozhikode', name: 'Kozhikode', emoji: '🏖️' },
        { id: 'wayanad', name: 'Wayanad', emoji: '☕' },
        { id: 'kannur', name: 'Kannur', emoji: '🏺' },
        { id: 'kasaragod', name: 'Kasaragod', emoji: '🥥' }
    ],
    'tamil-nadu': [
        { id: 'chennai', name: 'Chennai', emoji: '🏙️' },
        { id: 'coimbatore', name: 'Coimbatore', emoji: '🏭' },
        { id: 'madurai', name: 'Madurai', emoji: '🏛️' },
        { id: 'tiruchirappalli', name: 'Tiruchirappalli', emoji: '🏰' },
        { id: 'salem', name: 'Salem', emoji: '🌾' },
        { id: 'tirunelveli', name: 'Tirunelveli', emoji: '🌴' }
    ],
    // Add other states...
};

// State weather data
const stateData = {
    'kerala': {
        name: 'Kerala',
        emoji: '🌴',
        today: { temp: '28°C - 32°C', condition: '☀️', desc: 'Sunny, Light breeze' },
        tomorrow: { temp: '26°C - 30°C', condition: '🌦️', desc: 'Light rain expected' },
        dayAfter: { temp: '27°C - 31°C', condition: '⛅', desc: 'Partly cloudy' },
        recommendations: [
            'Good weather for planting rice seedlings',
            'Ideal conditions for coconut harvesting',
            'Light rain tomorrow - cover sensitive crops'
        ],
        crops: ['Rice', 'Coconut', 'Banana', 'Spices']
    },
    // Add other states...
};

// Weather Forecast Function
function showWeatherForecast() {
    const content = `
        <div class="space-y-6">
            <div class="flex items-center space-x-3 mb-6">
                <div class="text-4xl">🌤️</div>
                <h2 class="text-3xl font-bold text-gray-800">India Weather Forecast</h2>
            </div>

            <!-- State Selection -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <h3 class="text-xl font-semibold text-blue-800 mb-4" id="selectStateTitle">🗺️ Select State/Region</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    <button onclick="showStateWeather('kerala')" class="bg-white hover:bg-blue-100 border-2 border-blue-200 rounded-lg p-3 text-center transition-colors">
                        <div class="text-2xl mb-1">🌴</div>
                        <p class="text-sm font-semibold text-gray-800">Kerala</p>
                    </button>
                    <button onclick="showStateWeather('tamil-nadu')" class="bg-white hover:bg-blue-100 border-2 border-blue-200 rounded-lg p-3 text-center transition-colors">
                        <div class="text-2xl mb-1">🏛️</div>
                        <p class="text-sm font-semibold text-gray-800">Tamil Nadu</p>
                    </button>
                    <!-- Add more states... -->
                </div>
            </div>

            <!-- Weather Display Area -->
            <div id="weatherDisplay" class="bg-white rounded-xl shadow-lg p-6">
                <div class="text-center py-12">
                    <div class="text-6xl mb-4">🗺️</div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Select a State Above</h3>
                    <p class="text-gray-600">Click on any state to view detailed weather forecast and farming recommendations for that region.</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('contentArea').innerHTML = content;
    addFadeInAnimation('contentArea');
}

// State Weather Function
function showStateWeather(state) {
    const data = stateData[state];
    const districts = districtData[state] || [];
    const weatherDisplay = document.getElementById('weatherDisplay');
    
    showLoading('weatherDisplay');
    
    setTimeout(() => {
        weatherDisplay.innerHTML = `
            <div class="space-y-6">
                <div class="flex items-center space-x-3 mb-6">
                    <div class="text-4xl">${data.emoji}</div>
                    <h3 class="text-2xl font-bold text-gray-800">${data.name} Weather Forecast</h3>
                </div>

                <!-- District Selection -->
                <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                    <h4 class="text-lg font-semibold text-green-800 mb-4" id="selectDistrictTitle">🏘️ Select District</h4>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        ${districts.map(district => `
                            <button onclick="showDistrictWeather('${state}', '${district.id}')" class="bg-white hover:bg-green-100 border-2 border-green-200 rounded-lg p-3 text-center transition-colors">
                                <div class="text-xl mb-1">${district.emoji}</div>
                                <p class="text-sm font-semibold text-gray-800">${district.name}</p>
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Weather forecast content... -->
            </div>
        `;
        hideLoading('weatherDisplay');
    }, 500);
}

// District Weather Function
function showDistrictWeather(state, district) {
    // Implementation for district weather
    console.log(`Showing weather for ${district} in ${state}`);
}

// Helper Functions
function refreshWeather(state = 'kerala') {
    const stateNames = {
        'kerala': 'Kerala',
        'tamil-nadu': 'Tamil Nadu',
        // Add more states...
    };
    alert(`🌤️ ${stateNames[state]} weather data refreshed!`);
}