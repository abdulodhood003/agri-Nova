//Disease detection module

function showDiseaseDetection() {
    const content = `
        <div class="space-y-6">
            <div class="flex items-center space-x-3 mb-6">
                <div class="text-4xl">🔬</div>
                <h2 class="text-3xl font-bold text-gray-800">AI Disease Detection</h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <!-- Image Upload Section -->
                <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
                    <h3 class="text-xl font-semibold text-pink-800 mb-4">📸 Upload Plant Image</h3>
                    <div class="border-2 border-dashed border-pink-300 rounded-lg p-8 text-center">
                        <div class="text-6xl mb-4">📷</div>
                        <p class="text-gray-600 mb-4">Click to upload or drag and drop</p>
                        <button onclick="simulateImageUpload()" class="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            Choose Image
                        </button>
                    </div>
                </div>

                <!-- AI Analysis Results -->
                <div class="bg-white rounded-xl border-2 border-gray-200 p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">🤖 AI Analysis Results</h3>
                    <div id="diseaseResults" class="space-y-4">
                        <div class="text-center py-8 text-gray-500">
                            <div class="text-4xl mb-2">🔍</div>
                            <p>Upload an image to start AI analysis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('contentArea').innerHTML = content;
    addFadeInAnimation('contentArea');
}

function simulateImageUpload() {
    const resultsDiv = document.getElementById('diseaseResults');
    showLoading('diseaseResults');
    
    setTimeout(() => {
        resultsDiv.innerHTML = `
            <div class="space-y-4">
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div class="flex items-center space-x-3 mb-3">
                        <div class="text-2xl">✅</div>
                        <h4 class="font-semibold text-green-800">Analysis Complete</h4>
                    </div>
                    <p class="text-sm text-gray-600 mb-3">Image processed successfully</p>
                </div>
            </div>
        `;
        hideLoading('diseaseResults');
    }, 2000);
}