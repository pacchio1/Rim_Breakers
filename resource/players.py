import datetime
import json
import mysql.connector
import os
import random
from faker import Faker

fake = Faker()
db_config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'database': 'rimbreakers',
}
connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()

cursor.execute("SELECT DISTINCT ID_team FROM `team`")
team_records = cursor.fetchall()
team_ids = [record[0] for record in team_records]
connection.commit()

"""
ID_player int auto_increment primary key,
season varchar primary key,
name varchar,
surname varchar,
weight int,
height int,
ID_country int,
mesh_number int,
age int,
played_min int,
point_scored int,
assist int,
ID_team int,
shots int,
shots_2 int,
shots_3 int,
free_trows int,
ball_holding_time int,
"""

season = ["2023", "2023-2024", "2024", "2024-2025"]
country = [4, 17, 18, 23, 45, 48, 55]

class GiocatoreBasket:
    def __init__(self):
        self.season = str(season[random.randint(0, 3)])
        self.name = fake.first_name()
        self.surname = fake.last_name()
        self.eta = random.randint(18, 40)
        self.altezza = round(random.uniform(1.70, 2.20), 2)
        self.peso = round(random.uniform(60, 120), 2)
        self.ID_country = country[random.randint(0, 6)]
        self.mesh_number = random.randint(1, 50)
        self.age = random.randint(18, 30)
        self.played_min = random.randint(0, 60)
        self.point_scored = random.randint(0, 30)
        self.assist = random.randint(0, 10)
        self.ID_team = random.choice(team_ids)
        self.shots = random.randint(0, 20)
        self.shots_2 = random.randint(0, 15)
        self.shots_3 = random.randint(0, 10)
        self.free_trows = random.randint(0, 5)
        self.ball_holding_time = random.randint(0, 120)

    def __str__(self):
        return f"Nome: {self.name}, Età: {self.eta}, Altezza: {self.altezza}m, Peso: {self.peso}kg, Posizione: {self.posizione}"

num_players = 47
players = [GiocatoreBasket() for _ in range(num_players)]

try:
    for player in players:
        insert_query = """
        INSERT INTO `players`(`season`, `name`, `surname`, `weight`, `height`, `ID_country`, `mesh_number`, `age`, `played_min`, `point_scored`, `assist`, `ID_team`, `shots`, `shots_2`, `shots_3`, `free_trows`, `ball_holding_time`)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
        """
        player_data = (
            player.season, player.name, player.surname, player.peso, player.altezza, player.ID_country,
            player.mesh_number, player.age, player.played_min, player.point_scored, player.assist,
            player.ID_team, player.shots, player.shots_2, player.shots_3, player.free_trows, player.ball_holding_time
        )
        cursor.execute(insert_query, player_data)

    # Commit the changes
    connection.commit()

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    # Close the cursor and connection
    if 'connection' in locals() and connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed.")
