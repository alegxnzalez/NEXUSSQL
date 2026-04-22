// LNM_SCENARIO_CHANGES.js

window.LNM_SCENARIO_CHANGES = {
  "tables": {
    "LNM_SCENARIO_CHANGES": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_SCENARIO"
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This column identifies the OTM Table, on whose entries changes are to be applied. "
        },
        "OBJECT_PK": {
          "type": "VARCHAR2(515)",
          "nullable": false,
          "key_value": true
        },
        "CHANGE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "U",
            "I",
            "D"
          ],
          "info": "Change Type can be I/U/D. I:Insert U:Update D:Delete"
        },
        "JSON_CHANGES": {
          "type": "CLOB",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
