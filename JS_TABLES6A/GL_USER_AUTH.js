// GL_USER_AUTH.js

window.GL_USER_AUTH = {
  "tables": {
    "GL_USER_AUTH": {
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_USER",
          "info": "The authenticated gl user ID "
        },
        "GL_USER_SESS_ID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "The authenticated web session id "
        },
        "LOGIN_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The login time "
        },
        "MACHINE_URL": {
          "type": "VARCHAR2(512)",
          "nullable": false,
          "info": "The url of the webserver"
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
