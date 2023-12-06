import datetime
import sqlite3
import json
import pymysql

def ScriviSuFile(nome, stringa):
    with open(nome, "w") as file:
        file.write(stringa)
        file.close()

def LeggiFile(nome ):
    with open(nome, "r") as file:
        stringa=file.read()
        file.close()
        return stringa

def InsertIntoSql(query, conn):
    cursor = conn.cursor()
    try:
        cursor.execute(query)
        conn.commit()
        print(f"Executed query: {query}")
    except Exception as e:
        print(f"Error executing query: {query}")
        print(f"Error details: {e}")
    finally:
        cursor.close()
""" file = open(conn, "a")
    s = LeggiFile(conn)
    s = s + query + ";\n"
    file.write(s)
    file.close() """


conn =  pymysql.connect(
    host='localhost',
    port=3306,
    user='root',
    database='rimbreakers',
)
conn ="architettura/listaQUERY.sql"
conn = sqlite3.connect('db/rimbreakers_lite.db')
giorni_dei_mesi = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
maxapi=5
with open("architettura/checkpoint_pulizia.txt", "r") as checkpoint_r:
    ck = checkpoint_r.readline().strip().split(" , ")
    anno = ck[0]
    m = int(ck[1])
    d = int(ck[2])

giorno= d
mese = m
while mese <= 12:
    while giorno <= giorni_dei_mesi[mese]:
        mese_txt=str(mese).zfill(2)
        giorno_txt=str(giorno).zfill(2)
        #condizione per ogni giorno
        nomefile = "data/games" + anno + "_" + mese_txt + "_" + giorno_txt + ".json"
        try:
            data = LeggiFile(nomefile)
        except:
            print("file non trovato")
            break
        #print(data)
        data = json.loads(data)
        print("letto il file del "+str(anno),mese_txt,giorno_txt)
        for x in data["response"]:
            id_principale = x["id"]
            data_principale = datetime.datetime.strptime(x["date"], "%Y-%m-%dT%H:%M:%S%z")
            status= x["status"]

            league_id =x["league"]["id"]
            league_name = x["league"]["name"]
            league_type = x["league"]["type"]
            league_season = x["league"]["season"]
            league_logo = x["league"]["logo"]

            country_id = x["country"]["id"]
            country_name = x["country"]["name"]
            country_code = x["country"]["code"]
            country_flag = x["country"]["flag"]

            teams_home_id=x["teams"]["home"]["id"]
            teams_home_name=x["teams"]["home"]["name"]
            teams_home_logo=x["teams"]["home"]["logo"]

            teams_away_id=x["teams"]["away"]["id"]
            teams_away_name=x["teams"]["away"]["name"]
            teams_away_logo=x["teams"]["away"]["logo"]

            scores = x["scores"]


            #tab Games
            date_str = data_principale.strftime("%Y-%m-%d %H:%M:%S")
            query = f"INSERT INTO games (id_games, date, status) VALUES ({id_principale}, STR_TO_DATE('{date_str}', '%Y-%m-%d %H:%i:%s'), '{status}')"
            InsertIntoSql(query,conn)

            query=f"INSERT INTO league ( id_league, name, type, season, logo )values( {league_id}, '{league_name}', '{league_type}', '{league_season}', '{league_logo}')"
            InsertIntoSql(query,conn)

            query=f"INSERT INTO country ( id_country, name, code, flag )values( {league_id}, '{league_name}', '{league_type}', {league_season}, '{league_logo}')"
            InsertIntoSql(query,conn)

            query=f"INSERT INTO team ( id_teams, name, logo )values( {teams_home_id}, '{teams_home_name}', '{teams_home_logo}')"
            InsertIntoSql(query,conn)

            query=f"INSERT INTO team ( id_teams, name, logo )values( {teams_away_id}, '{teams_away_name}', '{teams_away_logo}')"
            InsertIntoSql(query,conn)

        giorno=giorno+1
        maxapi=maxapi-1
        if maxapi == 0:
            nomefile = "architettura/checkpoint_pulizia.txt"
            stringa_data=str(anno) + " , " + mese_txt + " , " + giorno_txt
            ScriviSuFile(nomefile, stringa_data)
    #condizione per ogni mese
    mese=mese+1
    giorno=1
if mese > 12:
    giorno=1
    mese=1
    anno=int(anno)+1
    mese_txt=str(mese).zfill(2)
    giorno_txt=str(giorno).zfill(2)





