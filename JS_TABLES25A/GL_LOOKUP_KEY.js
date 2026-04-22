// GL_LOOKUP_KEY.js

window.GL_LOOKUP_KEY = {
  "tables": {
    "GL_LOOKUP_KEY": {
      "columns": {
        "GL_LOOKUP_KEY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GL_LOOKUP_KEY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "GL_CODE_ASSIGN_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "O",
            "S",
            "I",
            "B"
          ],
          "info": "Indicates if the key is to be used as a lookup for order GL codes or shipment GL codes."
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
      "fk_tables": [
        "GENERAL_LEDGER_CODE",
        "GL_CODE_MAP",
        "GL_LOOKUP_KEY_D"
      ]
    }
  }
};
