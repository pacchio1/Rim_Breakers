import datetime
import mysql.connector
def LeggiFile(nome ):
    with open(nome, "r") as file:
        stringa=file.read()
        file.close()
        return stringa
DBdata=LeggiFile("DBdata.txt")
DBdata.split(" , ")
conn = mysql.connector.connect(
    host=DBdata[0],
    user=DBdata[1],
    password=DBdata[2],
    database=DBdata[3]
)
def InsertIntoSql(query, conn):
    cursor = conn.cursor()
    cursor.execute(query)
    return cursor.fetchall()
    
giorni_dei_mesi = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

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
        nomefile = "games" + anno + "_" + mese_txt + "_" + giorno_txt + ".json"
        data = LeggiFile(anno)
        print(str(anno),mese_txt,giorno_txt)
        giorno=giorno+1
        maxapi=maxapi-1
        time_out=time_out-1
        if maxapi == 0:
            nomefile = "architettura/checkpoint_pulizia.txt"
            stringa_data=str(anno) + " , " + mese_txt + " , " + giorno_txt
            LeggiFile(nomefile, stringa_data)
    #condizione per ogni mese
    mese=mese+1
    giorno=1
if mese > 12:
    giorno=1
    mese=1
    anno=int(anno)+1
    mese_txt=str(mese).zfill(2)
    giorno_txt=str(giorno).zfill(2)




