// ROUTING_RULE_REFNUM.js

window.ROUTING_RULE_REFNUM = {
  "tables": {
    "ROUTING_RULE_REFNUM": {
      "columns": {
        "ORDER_ROUTING_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_ROUTING_RULE"
        },
        "ROUTING_RULE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTING_RULE_REFNUM_QUAL"
        },
        "ROUTING_RULE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
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
