// LNM_SCENARIO_CHANGE.js

window.LNM_SCENARIO_CHANGE = {
  "tables": {
    "LNM_SCENARIO_CHANGE": {
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
          "key_value": true
        },
        "OBJECT_PK": {
          "type": "VARCHAR2(515)",
          "nullable": false,
          "key_value": true
        },
        "LNM_SCENARIO_CHANGE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "CHANGE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "U",
            "D"
          ]
        },
        "NUM_OF_OBJECTS": {
          "type": "NUMBER()",
          "nullable": true
        },
        "JSON_CHANGES": {
          "type": "CLOB",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
