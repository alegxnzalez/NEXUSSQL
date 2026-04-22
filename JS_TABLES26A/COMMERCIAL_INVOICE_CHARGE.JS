// COMMERCIAL_INVOICE_CHARGE.js

window.COMMERCIAL_INVOICE_CHARGE = {
  "tables": {
    "COMMERCIAL_INVOICE_CHARGE": {
      "columns": {
        "COMMERCIAL_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COMMERCIAL_INVOICE"
},
        "SEQUENCE_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true
},
        "CHARGE_AMOUNT": {
          "type": "NUMBER",
          "nullable": false
},
        "CHARGE_AMOUNT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "CHARGE_AMOUNT_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "CHARGE_ACTIVITY": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
                    "ADD",
                    "SUBTRACT",
                    "IGNORE"
          ]
},
        "COMMERCIAL_INV_CHARGE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COMMERCIAL_INV_CHARGE_CODE",
          "info": "FK to the COMMERCIAL_INV_CHARGE_CODE table."
},
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used."
},
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used"
},
        "CHARGE_AMOUNT_FN": {
          "type": "NUMBER",
          "nullable": true,
          "info": "functional currency amount for charge_amount"
},
        "CHARGE_AMOUNT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
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