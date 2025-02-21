import os
import requests

print("🚀 Starting the script to download SimpleIcons...")

# List of technologies and their SimpleIcons slugs
technologies = [
    "typescript", "nextdotjs", "nestjs", "react", "mongodb", "fastify", "java",
    "docker", "rust", "go", "python", "elixir", "graphql", "php", "laravel", "symfony"
]

# Base URL for SimpleIcons
BASE_URL = "https://cdn.simpleicons.org/"

# Create directory to store icons
os.makedirs("icons", exist_ok=True)

# Download each SVG icon
for tech in technologies:
    url = f"{BASE_URL}{tech}"
    response = requests.get(url)

    if response.status_code == 200:
        with open(f"icons/{tech}.svg", "wb") as file:
            file.write(response.content)
        print(f"✅ Downloaded: {tech}.svg")
    else:
        print(f"❌ Failed to download: {tech}.svg")

print("🎉 All icons downloaded in the 'icons/' folder!")