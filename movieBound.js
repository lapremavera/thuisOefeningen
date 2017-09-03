function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.fullname = function() {
    return this.firstname + " " + this.lastname;
};

function Actor(firstname, lastname) {
    Person.call(this, firstname, lastname);
}
Actor.prototype = Object.create(Person.prototype);

function User(firstname, lastname, alias) {
    Person.call(this, firstname, lastname);
    this.alias = alias;
}
User.prototype = Object.create(User.prototype);

function Film(title, rating, runlength) {
    this.title = title;
    this.rating = rating;
    this.runlength = runlength;

    this.comments = [];
    this.characters = [];
}

Film.prototype.setDescription = function(description) {
    this.description = description
};

Film.prototype.addComment = function(user, text) {
    this.comments.push({
        user: user,
        text: text
    });
};

Film.prototype.addCharacter = function(actor, name) {
    this.characters.push({
        actor: actor,
        name: name
    });
};

// Usage part:
var f = new Film("Bound", 5, 142);
f.setDescription("Film about two women.");

f.addComment(new User("Jane", "Doe", "bitterologist"), "Cool movie!");
f.addComment(new User("Jon", "Snow", "Games"), "Very nice Warchowski-movie!");
f.addComment(new User("John", "Doe", "RottenTomatoes"), "Not liked it. Too many girlpower.");
f.addComment(new User("Jennifer", "Doe", "Jenny"), "Wow, amazing!");

f.addCharacter(new Actor("Jennifer", "Tilly"), "Violet");
f.addCharacter(new Actor("Gina", "Gershon"), "Corky");
f.addCharacter(new Actor("Joe", "Pantaliano"), "Caesar");

document.write("<h1>" + f.title + "</h1>");
document.write("<p>" + f.description + "</p>");
document.write("<table>");
    for (var c in f.characters) {
        document.write("<tr><td>" + f.characters[c].actor.fullname() + "</td><td>" + f.characters[c].name + "</td></tr>");
    }
document.write("</table>");


//nieuwe film

var movie = new Film("The Matrix", 5, 142);
movie.setDescription("Coole movie about computers");

movie.addComment(new User("Jane", "Doe", "bitterologist"), "Cool movie!");
movie.addComment(new User("Jon", "Snow", "Games"), "Very nice Warchowski-movie!");
movie.addComment(new User("John", "Doe", "RottenTomatoes"), "Not liked it. Too many girlpower.");
movie.addComment(new User("Jennifer", "Doe", "Jenny"), "Wow, amazing!");

movie.addCharacter(new Actor("Keanu", "Reeves"), "Neo");
movie.addCharacter(new Actor("Carrie-Anne", "Moss"), "Trinity");
movie.addCharacter(new Actor("Laurence", "Fishburne"),"Morpheus");
movie.addCharacter(new Actor("hugo", "Weaving"), "Agent Smith");

document.write("<h1>" + movie.title + "</h1>");
document.write("<p>" + movie.description + "</p>");
document.write("<table>");
for (var d in movie.characters) {
    document.write("<tr><td>" + movie.characters[d].actor.fullname() + "</td><td>" + movie.characters[d].name + "</td></tr>");
}
document.write("</table>");