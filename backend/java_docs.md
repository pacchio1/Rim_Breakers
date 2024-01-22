# Java Doc

## Entities

### Blog

    Attributi:

    id_blog (Tipo: Long): Questo è l'identificatore univoco per ogni blog. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    id_user (Tipo: Long): Rappresenta l'ID dell'utente associato al blog.

    id_country (Tipo: Long): Rappresenta l'ID del paese associato al blog.

    id_league (Tipo: Long): Rappresenta l'ID della lega associata al blog.

    id_team (Tipo: Long): Rappresenta l'ID della squadra associata al blog.

    text (Tipo: String): Contiene il testo del blog.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "blog"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Country

Attributi:

    id_country (Tipo: Long): Questo è l'identificatore univoco per ogni paese. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    id_league (Tipo: Long): Rappresenta l'ID della lega associata al paese.

    name (Tipo: String): Contiene il nome del paese.

    type (Tipo: String): Rappresenta il tipo di paese.

    code (Tipo: String): Contiene un codice associato al paese.

    flag (Tipo: String): Contiene un'informazione relativa alla bandiera del paese.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "country"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Games

Attributi:

    id_games (Tipo: Long): Questo è l'identificatore univoco per ogni partita. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    leagueId (Tipo: Long): Rappresenta l'ID della lega associata alla partita.

    date (Tipo: Date): Rappresenta la data della partita.

    status (Tipo: String): Rappresenta lo stato della partita, con una definizione di colonna TEXT.

    homeId (Tipo: Long): Rappresenta l'ID della squadra di casa.

    score_home (Tipo: String): Rappresenta il punteggio della squadra di casa, con una definizione di colonna TEXT.

    awayId (Tipo: Long): Rappresenta l'ID della squadra ospite.

    score_away (Tipo: String): Rappresenta il punteggio della squadra ospite, con una definizione di colonna TEXT.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "games"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### League

Attributi:

    id_league (Tipo: Long): Questo è l'identificatore univoco per ogni lega. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    name (Tipo: String): Contiene il nome della lega.

    type (Tipo: String): Rappresenta il tipo di lega.

    logo (Tipo: String): Rappresenta il logo della lega. La presenza dell'annotazione @Lob indica che si tratta di un oggetto binario di grandi dimensioni, adatto a memorizzare immagini o dati di grandi dimensioni.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "league"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Player

Attributi:

    idPlayer (Tipo: Long): Questo è l'identificatore univoco per ogni giocatore. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    season (Tipo: String): Contiene la stagione del giocatore.

    name (Tipo: String): Contiene il nome del giocatore. La colonna è configurata per accettare massimo 35 caratteri.

    surname (Tipo: String): Contiene il cognome del giocatore. La colonna è configurata per accettare massimo 40 caratteri.

    weight (Tipo: int): Rappresenta il peso del giocatore.

    height (Tipo: int): Rappresenta l'altezza del giocatore.

    idCountry (Tipo: int): Rappresenta l'ID del paese di appartenenza del giocatore.

    meshNumber (Tipo: int): Rappresenta il numero di maglia del giocatore.

    age (Tipo: int): Rappresenta l'età del giocatore.

    playedMin (Tipo: int): Rappresenta il tempo giocato in minuti.

    pointScored (Tipo: int): Rappresenta il punteggio totalizzato dal giocatore.

    assist (Tipo: int): Rappresenta il numero di assist effettuati dal giocatore.

    idTeam (Tipo: int): Rappresenta l'ID della squadra di appartenenza del giocatore.

    shots (Tipo: int): Rappresenta il numero di tiri effettuati dal giocatore.

    shots2 (Tipo: int): Rappresenta il numero di tiri da due punti effettuati dal giocatore.

    shots3 (Tipo: int): Rappresenta il numero di tiri da tre punti effettuati dal giocatore.

    freeThrows (Tipo: int): Rappresenta il numero di tiri liberi effettuati dal giocatore.

    ballHoldingTime (Tipo: int): Rappresenta il tempo totale di possesso palla del giocatore.

    nationality (Tipo: String): Rappresenta la nazionalità del giocatore.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "players"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Standings

## Repositories

## Services

## Controllers
