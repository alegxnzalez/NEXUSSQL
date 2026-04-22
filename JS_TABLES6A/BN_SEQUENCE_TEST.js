// BN_SEQUENCE_TEST.js

window.BN_SEQUENCE_TEST = {
  "tables": {
    "BN_SEQUENCE_TEST": {
      "columns": {
        "BN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BN_RULE"
        },
        "BN_CONTEXT": {
          "type": "VARCHAR2(300)",
          "nullable": false,
          "key_value": true
        },
        "BN_SEQUENCE_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "CURVALUE": {
          "type": "VARCHAR2(50)",
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
