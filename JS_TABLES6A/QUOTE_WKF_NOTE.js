// QUOTE_WKF_NOTE.js

window.QUOTE_WKF_NOTE = {
  "tables": {
    "QUOTE_WKF_NOTE": {
      "columns": {
        "QUOTE_WKF_NOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE"
        },
        "QUOTE_WKF_NOTE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "NOTE_TYPE": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "values": [
            "INTERNAL",
            "EXTERNAL"
          ]
        },
        "NOTE_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": false
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
