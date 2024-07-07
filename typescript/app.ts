interface Persona {
    id: string;
    nome: string;
    cognome: string;
    età: number;
    getFullName(): string;
}

class Utente implements Persona {
    id: string;
    nome: string;
    cognome: string;
    email: string;
    età: number;

    constructor(id: string, nome: string, cognome: string, email: string, età: number) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.età = età;
    }

    getFullName(): string {
        return `${this.nome} ${this.cognome}`;
    }
}

class Professore implements Persona {
    private _id: string;
    private _nome: string;
    private _cognome: string;
    private _materia: string;
    private _età: number;

    constructor(id: string, nome: string, cognome: string, materia: string, età: number) {
        this._id = id;
        this._nome = nome;
        this._cognome = cognome;
        this._materia = materia;
        this._età = età;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get cognome(): string {
        return this._cognome;
    }

    set cognome(value: string) {
        this._cognome = value;
    }

    get materia(): string {
        return this._materia;
    }

    set materia(value: string) {
        this._materia = value;
    }

    get età(): number {
        return this._età;
    }

    set età(value: number) {
        this._età = value;
    }

    getFullName(): string {
        return `${this._nome} ${this._cognome}`;
    }

    getSubject(): string {
        return this._materia;
    }
}



const utente = new Utente("1", "Mario", "Rossi", "mario.rossi@example.com", 30);
console.log(utente.getFullName());

const professore = new Professore("2", "Luigi", "Bianchi", "Matematica", 45);
console.log(professore.getFullName());
console.log(professore.getSubject());
