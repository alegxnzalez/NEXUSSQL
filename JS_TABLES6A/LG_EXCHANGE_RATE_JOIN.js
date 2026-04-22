// LG_EXCHANGE_RATE_JOIN.js

window.LG_EXCHANGE_RATE_JOIN = {
  "tables": {
    "LG_EXCHANGE_RATE_JOIN": {
      "columns": {
        "LOGISTICS_GUIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGISTICS_GUIDE"
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true
        },
        "FROM_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "TO_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "EXCHANGE_RATE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denormalized for convenience"
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
