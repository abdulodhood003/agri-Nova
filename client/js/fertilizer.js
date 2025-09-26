// Fertilizer calculator module

function showFertilizerCalculator() {
    const content = `
        <div class="space-y-6">
            <div class="flex items-center space-x-3 mb-6">
                <div class="text-4xl">🧮</div>
                <h2 class="text-3xl font-bold text-gray-800">Precision Fertilizer Calculator</h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <!-- Input Form -->
                <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                    <h3 class="text-xl font-semibold text-purple-800 mb-6">📝 Farm Details</h3>
                    <form onsubmit="calculateFertilizerNeeds(event)" class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Crop Type</label>
                            <select id="cropType" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                                <option value="tomato">🍅 Tomato</option>
                                <option value="paddy">🌾 Paddy Rice</option>
                                <option value="potato">🥔 Potato</option>
                                <option value="carrot">🥕 Carrot</option>
                                <option value="banana">🍌 Banana</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Farm Area (Acres)</label>
                            <input type="number" id="farmArea" placeholder="Enter area in acres" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" min="0.1" step="0.1" required>
                        </div>
                        <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                            🧮 Calculate Fertilizer Requirements
                        </button>
                    </form>
                </div>

                <!-- Results Display -->
                <div class="bg-white rounded-xl border-2 border-gray-200 p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-6">📊 Calculation Results</h3>
                    <div id="calculationResults" class="space-y-4">
                        <div class="text-center py-8 text-gray-500">
                            <div class="text-4xl mb-2">🧮</div>
                            <p>Fill the form to get precise fertilizer calculations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('contentArea').innerHTML = content;
    addFadeInAnimation('contentArea');
}

function calculateFertilizerNeeds(event) {
    event.preventDefault();
    
    const cropType = document.getElementById('cropType').value;
    const farmArea = parseFloat(document.getElementById('farmArea').value);

    // Fertilizer calculation logic
    const fertilizers = {
        tomato: { n: 120, p: 80, k: 100 },
        paddy: { n: 100, p: 50, k: 50 },
        potato: { n: 150, p: 100, k: 120 },
        carrot: { n: 80, p: 60, k: 80 },
        banana: { n: 200, p: 100, k: 300 }
    };

    const baseNPK = fertilizers[cropType];
    const totalN = (baseNPK.n * farmArea).toFixed(1);
    const totalP = (baseNPK.p * farmArea).toFixed(1);
    const totalK = (baseNPK.k * farmArea).toFixed(1);

    const resultsDiv = document.getElementById('calculationResults');
    showLoading('calculationResults');
    
    setTimeout(() => {
        resultsDiv.innerHTML = `
            <div class="space-y-4">
                <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 class="font-semibold text-purple-800 mb-3">📊 Fertilizer Requirements</h4>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">${totalN} kg</div>
                            <p class="text-sm text-gray-600">Nitrogen (N)</p>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-orange-600">${totalP} kg</div>
                            <p class="text-sm text-gray-600">Phosphorus (P)</p>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-purple-600">${totalK} kg</div>
                            <p class="text-sm text-gray-600">Potassium (K)</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        hideLoading('calculationResults');
    }, 1000);
}

function showFertilizerGuide() {
    // Implementation for fertilizer guide
    console.log('Showing fertilizer guide');
}