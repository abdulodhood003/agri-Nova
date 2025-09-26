
export interface WeatherData {
  current: {
    temperature: number;
    humidity: number;
    precipitation: number;
    windSpeed: number;
    condition: string;
  };
  forecast: Array<{
    date: string;
    maxTemp: number;
    minTemp: number;
    precipitation: number;
    precipitationChance: number;
    condition: string;
  }>;
  location: string;
  timestamp: Date;
}

export interface Recommendation {
  id: string;
  userId: string;
  type: string;
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  aiReasoning?: string;
  isCompleted: number;
  createdAt: Date;
}

export interface User {
  id: string;
  username: string;
  name?: string;
  email?: string;
  location?: string;
  farmSize?: number;
  selectedCrops?: string[];
  selectedGoals?: string[];
  createdAt: Date;
}

// API Base URL
const API_BASE = "";

// Weather API
export async function fetchWeather(location: string): Promise<WeatherData> {
  const response = await fetch(`${API_BASE}/api/weather/${encodeURIComponent(location)}`);
  if (!response.ok) {
    throw new Error(`Weather fetch failed: ${response.status}`);
  }
  return response.json();
}

// Recommendations API
export async function generateRecommendations(data: {
  userId: string;
  location: string;
  farmSize?: number;
  currentCrops: string[];
  goals: string[];
}): Promise<Recommendation[]> {
  const response = await fetch(`${API_BASE}/api/recommendations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`Recommendations generation failed: ${response.status}`);
  }
  
  return response.json();
}

export async function fetchRecommendations(userId: string): Promise<Recommendation[]> {
  const response = await fetch(`${API_BASE}/api/recommendations/${userId}`);
  if (!response.ok) {
    throw new Error(`Recommendations fetch failed: ${response.status}`);
  }
  return response.json();
}

export async function completeRecommendation(recommendationId: string): Promise<void> {
  const response = await fetch(`${API_BASE}/api/recommendations/${recommendationId}/complete`, {
    method: "PATCH",
  });
  
  if (!response.ok) {
    throw new Error(`Recommendation completion failed: ${response.status}`);
  }
}

// Chat API
export async function sendChatMessage(data: {
  message: string;
  userId?: string;
  userCrops?: string[];
  userLocation?: string;
}): Promise<{ response: string; context?: string }> {
  const response = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`Chat failed: ${response.status}`);
  }
  
  return response.json();
}

// Disease Detection API
export async function analyzeCropImage(data: {
  image: string;
  userId: string;
}): Promise<{
  diagnosis: string;
  confidence: number;
  recommendations: string[];
}> {
  const response = await fetch(`${API_BASE}/api/analyze-crop`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`Crop analysis failed: ${response.status}`);
  }
  
  return response.json();
}

// User API
export async function fetchUser(userId: string): Promise<User> {
  const response = await fetch(`${API_BASE}/api/users/${userId}`);
  if (!response.ok) {
    throw new Error(`User fetch failed: ${response.status}`);
  }
  return response.json();
}

export async function updateUser(userId: string, updates: Partial<User>): Promise<User> {
  const response = await fetch(`${API_BASE}/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  
  if (!response.ok) {
    throw new Error(`User update failed: ${response.status}`);
  }
  
  return response.json();
}