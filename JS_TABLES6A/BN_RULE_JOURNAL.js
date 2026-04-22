// BN_RULE_JOURNAL.js

window.BN_RULE_JOURNAL = {
  "tables": {
    "BN_RULE_JOURNAL": {
      "columns": {
        "BN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BN_RULE",
          "info": "BN_RULE_GID contains the unique identifier for the Business Number (BN) Generator rule."
        },
        "BUSINESS_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "TIMESTAMP": {
          "type": "DATE",
          "nullable": false
        },
        "STATUS": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "C",
            "R"
          ]
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
