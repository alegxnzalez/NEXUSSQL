// TENDER_COLLAB_SSU.js

window.TENDER_COLLAB_SSU = {
  "tables": {
    "TENDER_COLLAB_SSU": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT"
        },
        "ACCEPTANCE_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
        },
        "AVAILABLE_QUANTITY": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "ACCEPT_QUANTITY": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "EQUIPMENT_INFO": {
          "type": "VARCHAR2(500)",
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
