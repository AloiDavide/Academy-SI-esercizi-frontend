"use strict";
class Utente {
    constructor(id, nome, cognome, email, età) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.età = età;
    }
    getFullName() {
        return `${this.nome} ${this.cognome}`;
    }
}
class Professore {
    constructor(id, nome, cognome, materia, età) {
        this._id = id;
        this._nome = nome;
        this._cognome = cognome;
        this._materia = materia;
        this._età = età;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get cognome() {
        return this._cognome;
    }
    set cognome(value) {
        this._cognome = value;
    }
    get materia() {
        return this._materia;
    }
    set materia(value) {
        this._materia = value;
    }
    get età() {
        return this._età;
    }
    set età(value) {
        this._età = value;
    }
    getFullName() {
        return `${this._nome} ${this._cognome}`;
    }
    getSubject() {
        return this._materia;
    }
}
const utente = new Utente("1", "Mario", "Rossi", "mario.rossi@example.com", 30);
console.log(utente.getFullName());
const professore = new Professore("2", "Luigi", "Bianchi", "Matematica", 45);
console.log(professore.getFullName());
console.log(professore.getSubject());
