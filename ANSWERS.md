1. What is the purpose of using sessions?
    A. Sessions allow the server to store information for the client.  It can allow authentication data to persist without having
        to reenter the data everytime.

2. What does bcrypt do to help us store passwords in a secure manner.
    A.  Bcrypt hashes the password and salts it to make passwords more secure.  It can also rehash the password multiple times.

3. What does bcrypt do to slow down attackers?
    A.  The rehashing of passwords adds more variables making it harder for attackers to steal passwords.  They need to know the hash,
        the algorithm used, and the amount of rehashes to break the password.

4. What are the three parts of the JSON Web Token?
    A.  The three parts of the JSON Web Token are the header, the payload, and the signature.  The header contains the algorithm and the token type.
        The payload contains user data such as names, user ids, etc.  The signature creates a string which encodes the header and payload together 
        and adds the secret.