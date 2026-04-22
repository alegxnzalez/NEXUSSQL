// SHIPMENT_COST_DETAIL.js

window.SHIPMENT_COST_DETAIL = {
  "tables": {
    "SHIPMENT_COST_DETAIL": {
      "columns": {
        "SHIPMENT_COST_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_COST",
          "info": "The foreign key to shipment cost table. "
        },
        "DETAIL_SEQNO": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "A one-up number to make the cost detail record unique. "
        },
        "DETAIL": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The textual description of the cost detail as calculated and applied by the rating engine. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
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
