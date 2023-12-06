import datetime
import json
import mysql.connector

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
    #to do
    try:
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()
        cursor.close()
    except Exception as e:
        print(f"Error inserting data: {e}, \n {query}")

# MariaDB connection details
db_config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'database': 'rimbreakers',
}
conn = mysql.connector.connect(**db_config)

giorni_dei_mesi = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
maxapi=5
with open("resource/checkpoint_pulizia.txt", "r") as checkpoint_r:
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
            status= x["status"]["short"]

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

            scores_home = x["scores"]["home"]
            scores_away = x["scores"]["away"]

            scores_home_q1=scores_home["quarter_1"]
            scores_home_q2=scores_home["quarter_2"]
            scores_home_q3=scores_home["quarter_3"]
            scores_home_q4=scores_home["quarter_4"]
            scores_home_ot=scores_home["over_time"]
            scores_home_total=scores_home["total"]
            s_score_home=str(scores_home_q1)+","+str(scores_home_q2)+","+str(scores_home_q3)+","+str(scores_home_q4)+","+str(scores_home_ot)+","+str(scores_home_total)

            scores_away_q1=scores_home["quarter_1"]
            scores_away_q2=scores_home["quarter_2"]
            scores_away_q3=scores_home["quarter_3"]
            scores_away_q4=scores_home["quarter_4"]
            scores_away_ot=scores_home["over_time"]
            scores_away_total=scores_home["total"]
            s_score_away=str(scores_away_q1)+","+str(scores_away_q2)+","+str(scores_away_q3)+","+str(scores_away_q4)+","+str(scores_away_ot)+","+str(scores_away_total)

            #tab Games
            date_str = data_principale.strftime("%Y-%m-%d %H:%M:%S")
            query = f"INSERT INTO games (id_games, date, status, id_home, score_home, id_away, score_away) VALUES ({id_principale}, STR_TO_DATE('{date_str}', '%Y-%m-%d %H:%i:%s'), '{status}', {teams_home_id}, '{s_score_home}',  {teams_away_id}, '{s_score_away}')"
            InsertIntoSql(query,conn)
            query=f"INSERT INTO league ( id_league, name, type, season, logo )values( {league_id}, '{league_name}', '{league_type}', '{league_season}', '{league_logo}')"
            InsertIntoSql(query,conn)
            query=f"INSERT INTO country (id_country, name, code, flag )values( {league_id}, '{country_name}', '{country_code}', '{country_flag}')"
            InsertIntoSql(query,conn)
            print("\n"+s_score_home+"\n"+ s_score_away)
            query=f"INSERT INTO team ( id_team, name, logo, score )values( {teams_home_id}, '{teams_home_name}', '{teams_home_logo}')"
            InsertIntoSql(query,conn)
            query=f"INSERT INTO team ( id_team, name, logo )values( {teams_away_id}, '{teams_away_name}', '{teams_away_logo}')"
            InsertIntoSql(query,conn)

        giorno=giorno+1
        maxapi=maxapi-1
        if maxapi == 0:
            nomefile = "resource/checkpoint_pulizia.txt"
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





