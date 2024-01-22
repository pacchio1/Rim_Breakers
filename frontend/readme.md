# Progetto app B-ROOM
Benvenuto nel progetto B-ROOM!

## descrizione-del-progetto

Questa è la documentazione della nostra applicazione chiamata B-ROOM.
Questa app fornisce una soluzione avanzata del porre informazioni dettagliate su partire, squadre e giocatori del basket europeo.

1. [Descrizione del Progetto](#descrizione-del-progetto)
2. [Prerequisiti](#prerequisiti)
3. [Installazione](#installazione)
4. [Utilizzo](#utilizzo)
5. [Struttura del Codice](#struttura-del-codice)
6. [Esecuzione dei Test](#esecuzione-dei-test)
7. [Autenticazione](#autenticazione)
8. [Gestione degli Errori](#gestione-degli-errori)
9. [Pubblicazione del Blog](#pubblicazione-del-blog)
10. [Contatti-Supporto](#Contatti-e-Supporto)
11. [Licenza](#licenza) 

## Prerequisiti

Prima di poter iniziare, devi assicurarti di avere installato questi prerequisiti:

- [ Node ]
- [ Angular CLI ]

## installazione

Per installare il progetto, seguire i passaggi seguenti:

Scarica il progetto da:
https://github.com/pacchio1/Rim_Breakers/branches

```bash
cd B-ROOM
npm install
```

## utilizzo

Per avviare l'applicazione, bisogna eseguire il seguente comando:

```bash
npm start
```

L'app è accessibile all'url http://localhost:3000, se la porta è stata configurata nel modo standard.

## struttura-del-codice

Abbiamo sviluppato utilizzando questo:

- HTML
- SCSS
- Typescript

B-ROOM è strutturata in questo modo:

app/
|-- src/
| |-- app/
| | |-- \_model
| | | |-- countries.model.ts
| | | |-- league.model.ts
| | | |-- leagues.model.ts
| | | |-- login.model.ts
| | | |-- match.model.ts
| | | |-- player.model.ts
| | | |-- seasonStanding.model.ts
| | | |-- team.model.ts
| | | |-- teamPlayers.model.ts
| | |-- \_service
| | | |-- api.service.ts
| | | |-- basket.service.ts
| | | |-- dark-mode.service.ts
| | |-- blog-card
| | | |-- blog-card.component.html
| | | |-- blog-card.component.ts
| | |-- blog-detail
| | | |-- blog-detail.component.html
| | | |-- blog-detail.component.ts
| | |-- blog
| | | |-- blog.component.html
| | | |-- blog.component.ts
| | |-- contact
| | | |-- contact.component.html
| | | |-- contact.component.ts
| | |-- countries
| | | |-- countries.component.html
| | | |-- countries.component.ts
| | |-- footer
| | | |-- footer.component.html
| | | |-- footer.component.ts
| | |-- home
| | | |-- home.component.html
| | | |-- home.component.ts
| | |-- leagues
| | | |-- leagues.component.html
| | | |-- leagues.component.ts
| | |-- login
| | | |-- login.component.html
| | | |-- login.component.ts
| | |-- player-card
| | | |-- player-card.component.html
| | | |-- player-card.component.ts
| | |-- player-detail
| | | |-- player-detail.component.html
| | | |-- player-detail.component.ts
| | |-- profile
| | | |-- profile.component.html
| | | |-- profile.component.ts
| | |-- ranking
| | | |-- ranking.component.html
| | | |-- ranking.component.ts
| | |-- team
| | | |-- team.component.html
| | | |-- team.component.ts
| | |-- top-bar
| | | |-- top-bar.component.html
| | | |-- top-bar.component.ts
| | |-- app-routing.module.ts
| | |-- app.component.html
| | |-- app.component.scss
| | |-- app.component.spec.ts
| | |-- app.component.ts
| | |-- app.module.ts
| |-- assets
| | |-- imgX
| | | | -- basketball71.png
| | | | -- google-logo.png
| | | | -- instagram.png
| | | | -- logo-broom-white.png
| | | | -- logo-broom.png
| | | | -- profile-pic.png
| | |-- .gitkeep
|-- .editorconfig
|-- .gitignore
|-- README.md
|-- angular.json
|-- package-lock.json
|-- package.json
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.spec.json

## obbiettivo

Il nostro obbiettivo principale attraverso l'utilizzo della nostra app è mostrare nel modo più completo possibile i risultati di partite, informazioni di squadre e giocatori singoli.

## accessibilità

Ci siamo concentrati anche sotto l'aspetto dell'accessibilità, che tutt'oggi, è un tema estremamente attuale, Abbiamo deciso di implementare le diverse funzalità nel modo il più semplice e comprensivo possibile.

## esecuzione-dei-test

Abbiamo creato diverse sessioni di prova utente attraverso l'utilizzo di diversi dispositivi e l'utilizzo di differenti pesone.
Attraverso l'analisi del comportamento delle persone siamo riusciti a rendere l'utilizzo il maggiore fluido possibile.

## supporto_per_dispositivi_mobili

Siamo partiti a sviluppare Mobile-First per poi successivamente sviluppare per tablet e PC.
Con Test su diverse piattaforme mobili siamo riusciti e rendere l'utilizzo il pù ottimizzato possibile con l'utilizzo dell'app attraverso il dispositivo mobile.

**_ gestione statistiche  _**

Staistiche non esisteti all'interno dell'api e li abbiamo prese da faker il quale ce ne ha creti alcuni.

## gestione-degli-errori

La gestione deglu errori è un'aspetto fondamentale nella creazione di un'app con una parte di accesso.
Abbiamo Voluto crearlo nel modo più robusto possibile, per riuscire a ricreare un'esperienza il più posiva possibile.

## contatti-e-Supporto:

Informazioni su come contattare il team di sviluppo o ottenere supporto.
Motta Simone --> simonemotta@edu.itspiemonte.it
Pellicano Alessio Carlo --> carloAlessioPellicano@edu.itspiemonte.it
Novella Marta --> martanovella@edu.itspiemonte.it

## licenza

Diritti d'autore ©MottaSimone @CarloAlessioPellicano @MartaNovella [2024]

L'uso di questo software e della documentazione associata è soggetto ai seguenti termini e condizioni.

@Rim Bracker's concede a te una licenza non esclusiva, non trasferibile, revocabile e limitata per utilizzare, copiare, distribuire e modificare questo software, pur rispettando i termini di seguito indicati.
Il software è fornito "così com'è", senza garanzie di alcun tipo, esplicite o implicite, incluse ma non limitate a garanzie di commerciabilità, idoneità a uno scopo particolare e non violazione. L'Utente assume tutti i rischi relativi all'uso, alla qualità e alle prestazioni del software.
In nessun caso RimBrakers o gli autori del software saranno responsabili per danni diretti, indiretti, accidentali, speciali o consequenziali derivanti dall'uso o dall'incapacità di utilizzare il software, anche se avvisati della possibilità di tali danni.
