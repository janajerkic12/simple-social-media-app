
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1/posts");
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));

const postoviSchema = {
    title: String,
    content: String,
    imageURL: String,
    comment: String
}

const Post = mongoose.model("Post", postoviSchema);

app.route("/posts")
    .get((req, res) => {
        Post.find((err, foundPosts) => {
            if (err) {
                res.send(err);
            } else {
                res.send(foundPosts)
            }
        })
    })
    .post((req, res) => {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            imageURL: req.body.imageURL,
        });

        newPost.save((err) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Novi post je uspješno unesen");
            }
        })
    })
    .delete((req, res) => {
        Post.deleteMany((err) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Uspješno brisanje svih podataka.")
            }
        })
    });

app.route("/posts/:postTitle")
    .get((req, res) => {
        Post.findOne({ title: req.params.postTitle }, (err, foundPost) => {
            if (err) {
                res.send("Nema postova u bazi");
            } else {
                res.send(foundPost);
            }
        })
    })
    .post((req, res) => {
        const newPost = new Post({
            comment: req.body.comment,
        });

        newPost.save((err) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Novi komentar je uspješno unesen");
            }
        })
    })
    .put((req, res) => {
        Post.findOneAndUpdate(
            { title: req.params.postTitle },
            { title: req.body.title, content: req.body.content, imageURL: req.body.imageURL },
            { overwrite: true },
            (err) => {
                if (err) {
                    res.send("Post nije update-ovan");
                } else {
                    res.send("Post uspješno update-ovan.")
                }
            }
        )
    })
    .patch((req, res) => {
        Post.findOneAndUpdate(
            { title: req.params.postTitle },
            { $set: req.body },
            (err) => {
                if (err) {
                    res.send("Post nije update-ovan.");
                } else {
                    res.send("Update posta je uspješan.")
                }
            }
        )
    })
    .delete((req, res) => {
        Post.deleteOne(
            { title: req.params.postTitle },
            (err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Post uspješno obrisan.");
                }
            }
        )
    });

const userSchema = {
    name: String,
    username: String,
    password: String,
    status: String,
    role: String,
}

const User = mongoose.model("users", userSchema);

app.route("/users")
    .get((req, res) => {
        User.find((err, foundUsers) => {
            if (err) {
                res.send(err);
            } else {
                res.send(foundUsers);
            }
        })
    })
    .post((req, res) => {
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            status: "active",
            role: "user"
        });

        User.find({ username: req.body.username }, (err, foundUsers) => {
            if (err) {
                res.send(err);
            } else {
                if (foundUsers.length === 0) {
                    newUser.save((err) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("Korisnik uspješno dodan.");
                        }
                    })
                } else {
                    res.send("Korisnik s tim username već postoji.")
                }
            }
        })
    })
    .delete((req, res) => {
        User.deleteMany((err) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Svi korisnici uspješno obrisani.")
            }
        })
    });

app.route("/users/:username")
    .get((req, res) => {
        User.find({ username: req.params.username }, (err, foundUser) => {
            if (err) {
                res.send(err);
            } else {
                res.send(foundUser);
            }
        })
    })
    .put((req, res) => {
        User.findOneAndUpdate(
            { username: req.params.username },
            { name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password },
            { overwrite: true },
            (err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Korisnik uspješno update-ovan.");
                }
            }
        )
    })
    .patch((req, res) => {
        User.findOneAndUpdate(
            { username: req.params.username },
            { $set: req.body },
            (err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Uspješan update korisnika.");
                }
            }
        )
    })
    .delete((req, res) => {
        User.deleteOne(
            { username: req.params.username },
            (err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Korisnik uspješno obrisan.");
                }
            }
        )
    });

app.listen(5000, () => {
    console.log("Server started on port 5000");
})