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
"""
        ID_player
	 	season 
		name 	
		surname 	
		weight 	
		height 	
		ID_country 	
		mesh_number 	
		age
	 	played_min
	 	point_scored
	 	assist
	 	ID_team
	 	shots
	 	shots_2
	 	shots_3
	 	free_trows
	 	ball_holding_time """

season = [2023, 2023-2024, 2024, 2024-2025]

def Giocatore():
    class GiocatoreBasket:
        def __init__(self):
            self.season = season[random.randint(0, 4)]
            self.name = fake.name.firstName()
            self.surname = fake.name.lastName()
            self.eta = random.randint(18, 40)
            self.altezza = random.uniform(1.70, 2.20)  # Altezza in metri
            self.peso = random.uniform(60, 120)  # Peso in chilogrammi
            self.posizione = random.choice(["Guardia", "Ala", "Centro"])
            def __str__(self):
                return f"Nome: {self.nome}, Età: {self.eta}, Altezza: {self.altezza:.2f}m, Peso: {self.peso:.2f}kg, Posizione: {self.posizione}"

# Creazione di giocatori casuali
num_giocatori = 5
giocatori = [GiocatoreBasket() for _ in range(num_giocatori)]

# Stampare le informazioni dei giocatori
for giocatore in giocatori:
    print(giocatore)
