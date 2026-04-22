// GL_LOGIN_HISTORY.js

window.GL_LOGIN_HISTORY = {
  "tables": {
    "GL_LOGIN_HISTORY": {
      "description": "Contains the history of attempted GC3 logins.",
      "columns": {
        "LOGIN_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A sequence number used as primary key."
},
        "GL_USER_LOGIN_ATTEMPT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The attempted GL_USER."
},
        "LOGIN_STATUS": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Whether the attempt was successful, and if not, what was the reason."
},
        "LOGIN_MODE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Whether this was interactive or batch."
},
        "IP_ADDRESS": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The IP address of the client.  It is the IP address of the machine which has the web browser."
},
        "LOGIN_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Time of the login attempt."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "A key (from 1-4) based upon the insert_date which helps purge data periodically."
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
}
      },
      "fk_tables": []
    }
  }
};