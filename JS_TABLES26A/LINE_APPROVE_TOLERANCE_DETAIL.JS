// LINE_APPROVE_TOLERANCE_DETAIL.js

window.LINE_APPROVE_TOLERANCE_DETAIL = {
  "tables": {
    "LINE_APPROVE_TOLERANCE_DETAIL": {
      "description": "Individual tolerance settings for the given shipment cost/invoice line attributes; for example, all accessorial costs on the invoice line with accessorial code FUEL SURCHARGE may be 5% above the corresponding shipment cost.",
      "columns": {
        "LINE_APPROVE_TOLERANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LINE_APPROVE_TOLERANCE"
},
        "LINE_APPROVE_TOLERANCE_SEQ": {
          "type": "NUMBER(9)",
          "nullable": false,
          "key_value": true
},
        "COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "foreign_key": "COST_TYPE",
          "info": "Optional; indicates the cost type to apply tolerance checks between shipment cost and invoice line"
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Optional; indicates the accessorial code to apply tolerance checks between shipment cost and invoice line"
},
        "GENERAL_LEDGER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GENERAL_LEDGER_CODE",
          "info": "Optional; indicates the general ledger code to apply tolerance checks between shipment cost and invoice line"
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "Optional; indicates the payment method code to apply tolerance checks between shipment cost and invoice line"
},
        "ALLOWABLE_PERCENT_ABOVE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For the given cost attributes, the allowable percentage the invoice line may be above the corresponding shipment cost"
},
        "ALLOW_CURR_ABOVE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For the given cost attributes, the allowable monetary amount the invoice line may be above the corresponding shipment cost"
},
        "ALLOW_CURR_ABOVE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "ALLOW_CURR_ABOVE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ALLOWABLE_PERCENT_BELOW": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For the given cost attributes, the allowable percentage the invoice line may be below the corresponding shipment cost"
},
        "ALLOW_CURR_BELOW": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For the given cost attributes, the allowable monetary amount the invoice line may be below the corresponding shipment cost"
},
        "ALLOW_CURR_BELOW_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "ALLOW_CURR_BELOW_BASE": {
          "type": "NUMBER",
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