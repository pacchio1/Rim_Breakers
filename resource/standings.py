import http.client
import os
import json
import mysql.connector
import os
import time

def timeout():
    print("aspetta 60 sec ")
    time.sleep(30)
    print("sono passati 30 sec ")
    time.sleep(30)
def ScriviSuFile(nome, stringa):
    with open(nome, "w") as file:
        file.writelines(stringa)
        file.close()
def LeggiFile(nome ):
    with open(nome, "r") as file:
        stringa=file.read()
        file.close()
        return stringa

conn = http.client.HTTPSConnection("v1.basketball.api-sports.io")
apikey = "Subame la radio"
headers = {
    'x-rapidapi-host': "v1.basketball.api-sports.io",
    'x-rapidapi-key': apikey
}

def InsertIntoSql(query, db):
    try:
        cursor = db.cursor()
        cursor.execute(query)
        db.commit()
        cursor.close()
        print("inserito un campo")
    except Exception as e:
        print(f"Error inserting data: {e}, \n {query}")

db_config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'database': 'rimbreakers',
}
db = mysql.connector.connect(**db_config)
leagues_to_follow=[197,120,194,202,2,40,45,52,242,143,142,117,104]
time_out=10
noma="data/standings.json"
for lega in leagues_to_follow:
    time_out=time_out-1
    season = "2023-2024"
    endpoint = "standings?league="+str(lega)+"&season="+season
    conn.request("GET", "/" + endpoint, headers=headers)
    print("api chiamata")
    res = conn.getresponse()
    data = res.read()
    json_data=data.decode("utf-8")
    ScriviSuFile(noma, json_data)
    print(data)
    data = LeggiFile(noma)
    data = json.loads(data)
    for x in data["response"]:
        if isinstance(x, list):
            for item in x:
                id_league = item["league"]["id"]
                #season = item["league"]["season"]
                position = item["position"]
                group_name = item["group"]["name"]
                team_id = item["team"]["id"]
                played = item["games"]["played"]
                win = item["games"]["win"]["total"]
                percentage_won = item["games"]["win"]["percentage"]
                lose = item["games"]["lose"]["total"]
                percentage_lost = item["games"]["lose"]["percentage"]
                points_for = item["points"]["for"]
                points_against = item["points"]["against"]
                description = item["description"]
                query = f"INSERT INTO Standings (id_league, season, position, group_name, id_team, played, win, perc_win, lose, perc_lose, points_for, points_against, description) VALUES ({id_league}, '{season}', {position}, '{group_name}', {team_id}, {played}, {win}, {percentage_won}, {lose}, {percentage_lost}, {points_for}, {points_against}, '{description}')"
                InsertIntoSql(query,db)
                print(query)
        else:
            id_league = x["league"]["id"]
            season = x["league"]["season"]
            position = x["position"]
            group_name = x["group"]["name"]
            team_id = x["team"]["id"]
            played = x["games"]["played"]
            win = x["games"]["win"]
            percentage_won = x["games"]["win"]["percentage"]
            lose = x["games"]["lose"]
            percentage_lost = x["games"]["lose"]["percentage"]
            points_for = x["points"]["for"]
            points_against = x["points"]["against"]
            description = x["description"]
            query = f"INSERT INTO Standings (id_league, season, position, group_name, id_team, played, win, perc_win, lose, perc_lose, points_for, points_against, description) VALUES ({id_league}, '{season}', {position}, '{group_name}', {team_id}, {played}, {win}, {percentage_won}, {lose}, {percentage_lost}, {points_for}, {points_against}, '{description}')"
            InsertIntoSql(query,db)
            print(query)
    print("inserito uno standings")
    if time_out ==0:
        timeout()
        time_out=10


