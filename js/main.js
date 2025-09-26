// Main application controller
let currentLanguage = 'en';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kerala Krishi AI - Application Initialized');
    updatePageLanguage();
});

// Language change handler
function changeLanguage() {
    const selectedLang = document.getElementById('languageSelector').value;
    currentLanguage = selectedLang;
    updatePageLanguage();
}

// Update page language
function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Update header
    document.querySelector('h1').textContent = t.headerTitle;
    document.getElementById('headerSubtitle').textContent = t.headerSubtitle;
    document.getElementById('headerTagline').textContent = t.headerTagline;
    
    // Update welcome section
    document.querySelector('h2').innerHTML = t.welcomeTitle;
    document.querySelector('h2').nextElementSibling.textContent = t.welcomeDesc;
    
    // Update feature cards
    const featureCards = document.querySelectorAll('.card-hover');
    if (featureCards.length >= 7) {
        featureCards[0].querySelector('h3').textContent = t.weatherForecast;
        featureCards[0].querySelector('p').textContent = t.weatherDesc;
        featureCards[1].querySelector('h3').textContent = t.cropRecommendation;
        featureCards[1].querySelector('p').textContent = t.cropDesc;
        featureCards[2].querySelector('h3').textContent = t.diseaseDetection;
        featureCards[2].querySelector('p').textContent = t.diseaseDesc;
        featureCards[3].querySelector('h3').textContent = t.fertilizerCalculator;
        featureCards[3].querySelector('p').textContent = t.fertilizerDesc;
        featureCards[4].querySelector('h3').textContent = t.soilErosionDashboard;
        featureCards[4].querySelector('p').textContent = t.soilErosionDesc;
        featureCards[5].querySelector('h3').textContent = t.fertilizerGuide;
        featureCards[5].querySelector('p').textContent = t.fertilizerGuideDesc;
        featureCards[6].querySelector('h3').textContent = t.analyticsHub;
        featureCards[6].querySelector('p').textContent = t.analyticsDesc;
    }
    
    // Update content area if showing default
    const contentArea = document.getElementById('contentArea');
    if (contentArea.innerHTML.includes('Select a Feature Above')) {
        contentArea.innerHTML = `
            <div class="text-center py-12">
                <div class="text-6xl mb-4">🌾</div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">${t.selectFeature}</h3>
                <p class="text-gray-600">${t.selectFeatureDesc}</p>
            </div>
        `;
    }
}

// Utility functions
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('loading');
}

function hideLoading(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('loading');
}

function addFadeInAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('fade-in');
}