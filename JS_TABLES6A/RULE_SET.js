// RULE_SET.js

window.RULE_SET = {
  "tables": {
    "RULE_SET": {
      "columns": {
        "RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RULE_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "RULE_SET_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
        },
        "IS_SCENARIO": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "SCENARIO_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RULE_SET",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
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
        "RULE_SET",
        "RULE_SET_JOIN"
      ]
    }
  }
};
