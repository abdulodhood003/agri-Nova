// Analytics dashboard module

function showSoilErosionDashboard() {
    const content = `
        <div class="space-y-6">
            <div class="flex items-center space-x-3 mb-6">
                <div class="text-4xl">📊</div>
                <h2 class="text-3xl font-bold text-gray-800">Advanced Soil Erosion Dashboard</h2>
            </div>

            <!-- Key Metrics -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-xl p-6 text-center">
                    <div class="text-3xl mb-2">⚠️</div>
                    <h3 class="text-lg font-semibold">Erosion Risk</h3>
                    <p class="text-2xl font-bold">Medium</p>
                    <p class="text-sm opacity-80">15% of farm area</p>
                </div>
                <!-- Add more metric cards... -->
            </div>

            <div class="flex space-x-4">
                <button onclick="generateErosionReport()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    📄 Generate Detailed Report
                </button>
                <button onclick="scheduleMonitoring()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    📅 Schedule Monitoring
                </button>
            </div>
        </div>
    `;
    document.getElementById('contentArea').innerHTML = content;
    addFadeInAnimation('contentArea');
}

function showAnalyticsDashboard() {
    const content = `
        <div class="space-y-6">
            <div class="flex items-center space-x-3 mb-6">
                <div class="text-4xl">📈</div>
                <h2 class="text-3xl font-bold text-gray-800">Farm Analytics Hub</h2>
            </div>

            <!-- Performance Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center">
                    <div class="text-3xl mb-2">📊</div>
                    <h3 class="text-lg font-semibold">Yield Efficiency</h3>
                    <p class="text-2xl font-bold">87%</p>
                    <p class="text-sm opacity-80">↑ 12% from last season</p>
                </div>
                <!-- Add more performance cards... -->
            </div>
        </div>
    `;
    document.getElementById('contentArea').innerHTML = content;
    addFadeInAnimation('contentArea');
}

function generateErosionReport() {
    alert('📄 Generating comprehensive soil erosion report...');
}

function scheduleMonitoring() {
    alert('📅 Soil monitoring scheduled!');
}