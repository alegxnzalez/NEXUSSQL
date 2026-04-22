// ROUTING_RULE_REFNUM_QUAL.js

window.ROUTING_RULE_REFNUM_QUAL = {
  "tables": {
    "ROUTING_RULE_REFNUM_QUAL": {
      "columns": {
        "ROUTING_RULE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ROUTING_RULE_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ROUTING_RULE_REFNUM_QUAL_DESC": {
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
        "ROUTING_RULE_REFNUM"
      ]
    }
  }
};
