// this assignment denpends on AI help , I TRIED to solve it but I was stuck at some points . 
// ^^^^^^^^^^^^^^^
class User {
    public id: number;
    public name: string;
    public email: string;
    private password: string;
    protected phone: string;
    private _age: number;

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;

        if (age >= 18 && age <= 60) {
            this._age = age;
        } else {
            throw new Error(`Age must be between 18 and 60. Provided: ${age}`);
        }
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (value >= 18 && value <= 60) {
            this._age = value;
        } else {
            throw new Error(`Age must be between 18 and 60. Provided: ${value}`);
        }
    }

    public displayInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this._age}`);
        console.log(`Password: ${this.password}`);
    }
}



class Admin extends User {
    private notes: string[];

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number, notes: string[]) {
        super(id, name, email, password, phone, age);
        this.notes = notes;
    }

    public displayInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Notes: ${this.notes}`);
    }
}

const admin1 = new Admin(2, "Khaled", "[EMAIL_ADDRESS]", "kk22", "01098765432", 30, ["Note 1", "Note 2", "Note 3"]);
admin1.displayInfo();

class Note {
    public id: number;
    public title: string;
    public content: string;
    public userId: User;

    constructor(id: number, title: string, content: string, userId: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview(){
        console.log(`id: ${this.id} , title: ${this.title} , content: ${this.content} , userId: ${this.userId.id}`);
        
    }
}

const user1 = new User(1, "Seif", "seif@gmail.com", "ss11", "01123456789", 25);
const note1 = new Note(
    1,
    "note-1",
    "first note for user-1",
    user1
);

note1.preview();

class NoteBook {
    private notes: Note[] = [];

    public addNote(id: number, title: string, content: string, user: User): Note {
        const newNote = new Note(id, title, content, user);
        this.notes.push(newNote);
        return newNote;
    }

    public removeNote(id: number): void {
        const initialLength = this.notes.length;
        this.notes = this.notes.filter(note => note.id !== id);
        if (this.notes.length < initialLength) {
            console.log(`Note with ID ${id} removed successfully.`);
        } else {
            console.log(`Note with ID ${id} not found.`);
        }
    }

    public getNotes(): Note[] {
        return this.notes;
    }

    public listNotes(): void {
        console.log(`\n=== Notebook (${this.notes.length} Notes) ===`);
        if (this.notes.length === 0) {
            console.log("No notes available in this notebook.");
            return;
        }
        this.notes.forEach(note => note.preview());
    }
}

const myNotebook = new NoteBook();

myNotebook.addNote(1, "TypeScript Basics", "Learn types, interfaces and classes", user1);
myNotebook.addNote(2, "OOP in TS", "Understand Inheritance, Encapsulation, and Composition", user1);
myNotebook.addNote(3, "Route Assignment", "Finish the assignment before deadline", user1);

myNotebook.listNotes();

myNotebook.removeNote(2);

myNotebook.listNotes();


