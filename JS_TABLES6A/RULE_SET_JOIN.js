// RULE_SET_JOIN.js

window.RULE_SET_JOIN = {
  "tables": {
    "RULE_SET_JOIN": {
      "columns": {
        "RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RULE_SET",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RULE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "SEQUENCE": {
          "type": "NUMBER(3)",
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
