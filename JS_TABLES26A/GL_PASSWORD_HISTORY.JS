// GL_PASSWORD_HISTORY.js

window.GL_PASSWORD_HISTORY = {
  "tables": {
    "GL_PASSWORD_HISTORY": {
      "description": "Contains the historic list of passwords for a given user.  GC3 reviews this list to prevent a user from repeating a recently used password.  The parameter for the number of passwords that is stored for a given user is in the GL_ACCOUNT_POLICY table.",
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_USER",
          "info": "The GC3 user."
},
        "GL_PASSWORD": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "The user'spassword."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "SALT": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "This is a base 64 encoded randomly generated ID unique to each user for each password."
},
        "HASH_ALG": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "This is metadata used to identify the digest algorithm used to produce the encrypted password."
},
        "ITERATION_COUNT": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};