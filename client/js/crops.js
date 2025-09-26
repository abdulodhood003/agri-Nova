//Crop recommendation module

function showCropRecommendation() {
    const content = `
        <div class="space-y-6">
            <div class="flex items-center space-x-3 mb-6">
                <div class="text-4xl">🌱</div>
                <h2 class="text-3xl font-bold text-gray-800">AI Crop Recommendations</h2>
            </div>

            <div class="bg-orange-50 rounded-lg p-6 mb-6">
                <h3 class="text-xl font-semibold text-orange-800 mb-4">Recommended Crops for Kerala</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-white rounded-lg p-4 border border-orange-200">
                        <div class="text-3xl mb-2">🍅</div>
                        <h4 class="font-semibold text-gray-800">Tomato</h4>
                        <p class="text-sm text-gray-600 mb-2">High yield potential</p>
                        <div class="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Recommended</div>
                    </div>
                    <!-- Add more crop cards... -->
                </div>
            </div>

            <button onclick="generateNewRecommendations()" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                🔄 Generate New Recommendations
            </button>
        </div>
    `;
    document.getElementById('contentArea').innerHTML = content;
    addFadeInAnimation('contentArea');
}

function generateNewRecommendations() {
    alert('🤖 AI is analyzing current conditions... New crop recommendations generated!');
}