// DM_TRANSACTION_NOTE.js

window.DM_TRANSACTION_NOTE = {
  "tables": {
    "DM_TRANSACTION_NOTE": {
      "columns": {
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
        "DM_TRANSACTION_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DM_TRANSACTION",
          "info": "DM_TRANSACTION_SEQ_NO contains the unique identifier for the demurrage transaction. "
        },
        "NOTE_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "NOTE_SEQ_NO contains the unique identifier for the DM_TRANSACTION_NOTE. "
        },
        "SUMMARY": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "info": "Note Summary "
        },
        "NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "NOTE contains the note(s) about the demurrage transaction. "
        },
        "IS_SYSTEM_GENERATED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether this is system generated or not."
        }
      },
      "fk_tables": []
    }
  }
};
