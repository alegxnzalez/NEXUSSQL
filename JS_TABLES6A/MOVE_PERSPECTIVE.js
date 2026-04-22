// MOVE_PERSPECTIVE.js

window.MOVE_PERSPECTIVE = {
  "tables": {
    "MOVE_PERSPECTIVE": {
      "columns": {
        "MOVE_PERSPECTIVE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "MOVE_PERSPECTIVE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
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
      "fk_tables": [
        "BUYER_TEMPLATE",
        "JOB",
        "NFRC_RULE",
        "ORDER_RELEASE"
      ]
    }
  }
};
