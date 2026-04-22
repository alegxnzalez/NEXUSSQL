// STYLESHEET_PROFILE_ARG.js

window.STYLESHEET_PROFILE_ARG = {
  "tables": {
    "STYLESHEET_PROFILE_ARG": {
      "columns": {
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STYLESHEET_PROFILE"
        },
        "ARG_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "key_value": true
        },
        "ARG_SOURCE": {
          "type": "VARCHAR2(7)",
          "nullable": false,
          "values": [
            "USER",
            "MESSAGE"
          ],
          "info": "Specifies if the argument is extracted from the message, or is defined by the user. "
        },
        "IS_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies that the argument is required for this message format to be applied."
        },
        "DEFAULT_VALUE": {
          "type": "VARCHAR2(1000)",
          "nullable": true
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
