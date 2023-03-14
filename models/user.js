 class User {
    email;
    password;
    username;

    User( email,  password,  username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }

    // Getters and setters
     getEmail() {
        return email;
    }

     setEmail( email) {
        this.email = email;
    }

     getPassword() {
        return password;
    }

     setPassword( password) {
        this.password = password;
    }

     getUsername() {
        return username;
    }

     setUsername( username) {
        this.username = username;
    }
}