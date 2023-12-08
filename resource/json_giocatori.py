import requests
import json

def download_player_data():
    leagues = ["EuroBasket", "Euroleague", "Eurocup", "Champions League", "LNB", "BBL", "Basket League", "A1", "Lega A", "Serie A2", "Italian Cup", "Lega A - Super Cup", "ACB", "Super Ligi"]
    api_urls = {
    "EuroBasket": "http://example.com/eurobasket/api/players",
    "Euroleague": "http://example.com/euroleague/api/players",
    "Eurocup": "http://example.com/eurocup/api/players",
    "Champions League": "http://example.com/champions-league/api/players",
    "LNB": "http://example.com/lnb/api/players",
    "BBL": "http://example.com/bbl/api/players",
    "Basket League": "http://example.com/basket-league/api/players",
    "A1": "http://example.com/a1/api/players",
    "Lega A": "http://example.com/lega-a/api/players",
    "Serie A2": "http://example.com/serie-a2/api/players",
    "Italian Cup": "http://example.com/italian-cup/api/players",
    "Lega A - Super Cup": "http://example.com/lega-a-super-cup/api/players",
    "ACB": "http://example.com/acb/api/players",
    "Super Ligi": "http://example.com/super-ligi/api/players"
    }


    for league in leagues:
        if league in api_urls:
            api_url = api_urls[league]
            response = requests.get(api_url)

            if response.status_code == 200:
                player_data = response.json()

                # Save player data in JSON file
                filename = f"{league}_players.json"
                with open(filename, "w") as f:
                    json.dump(player_data, f, indent=4)
                print(f"Player data for {league} saved successfully.")
            else:
                print(f"Failed to download player data for {league}.")
        else:
            print(f"No API URL available for {league}.")

# Call the function to download player data
download_player_data()
