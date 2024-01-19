import http.client
import os
from datetime import date, time, datetime, timedelta
import json
import mysql.connector
import os


conn = http.client.HTTPSConnection("v1.basketball.api-sports.io")
apikey = "0b54a917c3c10455f93a3a5c857ea313"
headers = {
    'x-rapidapi-host': "v1.basketball.api-sports.io",
    'x-rapidapi-key': apikey
}
oggi=date.today()
ieri = oggi - timedelta(days=1)
ieri = ieri.strftime("%Y,%m,%d").split(",")
endpoint = "games?date=" + ieri[0] + "-" + ieri[1] + "-" + ieri[2]
conn.request("GET", "/" + endpoint, headers=headers)
res = conn.getresponse()
data = res.read()
data.decode("utf-8")
print("api chiamata")
def InsertIntoSql(query, conn):
    try:
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()
        cursor.close()
        print("inserito un campo")
    except Exception as e:
        #print(f"Error inserting data: {e}, \n {query}")
        0

db_config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'database': 'rimbreakers',
}
conn = mysql.connector.connect(**db_config)
leagues_to_follow=[197,120,194,202,2,40,45,52,242,143,142,117,104]

data = json.loads(data)
for x in data["response"]:
    id_principale = x["id"]
    data_principale = datetime.strptime(x["date"], "%Y-%m-%dT%H:%M:%S%z")
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
    scores_away_q1=scores_away["quarter_1"]
    scores_away_q2=scores_away["quarter_2"]
    scores_away_q3=scores_away["quarter_3"]
    scores_away_q4=scores_away["quarter_4"]
    scores_away_ot=scores_away["over_time"]
    scores_away_total=scores_away["total"]
    s_score_away=str(scores_away_q1)+","+str(scores_away_q2)+","+str(scores_away_q3)+","+str(scores_away_q4)+","+str(scores_away_ot)+","+str(scores_away_total)
    if league_id in leagues_to_follow:
            date_str = data_principale.strftime("%Y-%m-%d %H:%M:%S")
            query = f"INSERT INTO games (id_games, id_league, date, status, id_home, score_home, id_away, score_away) VALUES ({id_principale}, {league_id}, STR_TO_DATE('{date_str}', '%Y-%m-%d %H:%i:%s'), '{status}', {teams_home_id}, '{s_score_home}',  {teams_away_id}, '{s_score_away}')"
            InsertIntoSql(query,conn)
            print (" games updated "+ str(id_principale))
            query=f"INSERT INTO league ( id_league, name, type, season, logo )values( {league_id}, '{league_name}', '{league_type}', '{league_season}', '{league_logo}')"
            InsertIntoSql(query,conn)
            print(" league updated "+ league_name)
            query=f"INSERT INTO team ( id_team, id_league, name, logo )values( {teams_home_id}, {league_id}, '{teams_home_name}', '{teams_home_logo}')"
            InsertIntoSql(query,conn)
            print(" team updated " + teams_home_name)
            query=f"INSERT INTO team ( id_team, id_league, name, logo )values( {teams_away_id}, {league_id}, '{teams_away_name}', '{teams_away_logo}')"
            InsertIntoSql(query,conn)
            print(" team updated "+ teams_away_name)
            query=f"INSERT INTO season (season )values('{league_season}')"
            InsertIntoSql(query,conn )
            #print(" season updated \n")
            query=f"INSERT INTO country (id_country, id_league, name, code, flag )values( {country_id}, {league_id}, '{country_name}', '{country_code}', '{country_flag}')"
            InsertIntoSql(query,conn)
            print(" country updated "+ country_name)

