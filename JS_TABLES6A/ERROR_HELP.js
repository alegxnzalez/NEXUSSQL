// ERROR_HELP.js

window.ERROR_HELP = {
  "tables": {
    "ERROR_HELP": {
      "columns": {
        "ERROR_TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRANSLATION",
          "info": "The translation that is associated with an error. "
        },
        "HELP_URL": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "The URL, or web address, of a help page for an error."
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
