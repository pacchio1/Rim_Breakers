import http.client
import os
import time

giorni_dei_mesi = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

with open("resource/checkpoint_yoinc.txt", "r") as checkpoint_r:
    ck = checkpoint_r.readline().strip().split(" , ")
    anno = ck[0]
    m = int(ck[1])
    d = int(ck[2])

conn = http.client.HTTPSConnection("v1.basketball.api-sports.io")
apikey = ["dajeroma"]
headers = {
    'x-rapidapi-host': "v1.basketball.api-sports.io",
    'x-rapidapi-key': apikey[0]
}

def timeout():
    print("aspetta 60 sec ")
    time.sleep(30)
    print("sono passati 30 sec ")
    time.sleep(30)

def GetApi(anno, mese, giorno):
    endpoint = "games?date=" + anno + "-" + mese + "-" + giorno
    conn.request("GET", "/" + endpoint, headers=headers)
    res = conn.getresponse()
    data = res.read()
    nomefile = "games" + anno + "_" + mese + "_" + giorno + ".json"
    nome="data/" + nomefile
    string_json=(data.decode("utf-8"))
    ScriviSuFile(nome, string_json)



def ScriviSuFile(nome, stringa):
    with open(nome, "w") as file:
        file.writelines(stringa)
        file.close()

time_out=10
maxapi=30
giorno= d
mese = m
while mese <= 12:
    while giorno <= giorni_dei_mesi[mese]:
        mese_txt=str(mese).zfill(2)
        giorno_txt=str(giorno).zfill(2)
        GetApi(str(anno),mese_txt,giorno_txt)
        #condizione per ogni giorno
        print(str(anno),mese_txt,giorno_txt)
        giorno=giorno+1
        maxapi=maxapi-1
        time_out=time_out-1
        if maxapi == 0:
            nomefile = "resource/checkpoint_yoinc.txt"
            stringa_data=str(anno) + " , " + mese_txt + " , " + giorno_txt
            ScriviSuFile(nomefile, stringa_data)
            break
        if time_out==0:
            time_out=10
            timeout()

    #condizione per ogni mese
    mese=mese+1
    if maxapi == 0:
        nomefile = "resource/checkpoint_yoinc.txt"
        stringa_data=str(anno) + " , " + mese_txt + " , " + giorno_txt
        ScriviSuFile(nomefile, stringa_data)
        break
    giorno=1
if mese > 12:
    giorno=1
    mese=1
    anno=int(anno)+1
    mese_txt=str(mese).zfill(2)
    giorno_txt=str(giorno).zfill(2)
nomefile = "resource/checkpoint_yoinc.txt"
stringa_data=str(anno) + " , " + mese_txt + " , " + giorno_txt
ScriviSuFile(nomefile, stringa_data)

