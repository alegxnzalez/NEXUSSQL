// QUOTE_COST_OPTION_SHIP_COST.js

window.QUOTE_COST_OPTION_SHIP_COST = {
  "tables": {
    "QUOTE_COST_OPTION_SHIP_COST": {
      "description": "Shipment cost of the cost option for quote",
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION_SHIPMENT",
          "info": "The GID for the quote."
},
        "COST_OPTION_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION_SHIPMENT",
          "info": "Option Number: Each possible cost option is assigned an Option Number."
},
        "SHIPMENT_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION_SHIPMENT",
          "info": "Internal sequence number for shipment information provide as part of the quote option."
},
        "COST_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "Cost sequence number for different cost provided for the quote cost option."
},
        "COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "B",
                    "A",
                    "D",
                    "S",
                    "O"
          ],
          "info": "Cost type - e.g., Base Cost, Accessorial etc."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The GID for the accessorial cost (if any) on the quote cost option."
},
        "COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Cost."
},
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the cost currency."
},
        "COST_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Cost in the base currency."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Description."
},
        "COST_EXPLANATION": {
          "type": "VARCHAR2(512)",
          "nullable": true,
          "info": "Explanation for cost."
},
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "Indicates the payment method that applies to this quote shipment cost."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};