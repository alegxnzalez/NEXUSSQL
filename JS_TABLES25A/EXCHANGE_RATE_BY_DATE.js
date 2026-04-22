// EXCHANGE_RATE_BY_DATE.js

window.EXCHANGE_RATE_BY_DATE = {
  "tables": {
    "EXCHANGE_RATE_BY_DATE": {
      "columns": {
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "The GID of the exchange rate. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "The effective date for this exchange rate. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date for this exchange rate."
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
        "CURRENCY_EXCHANGE_RATE"
      ]
    }
  }
};
