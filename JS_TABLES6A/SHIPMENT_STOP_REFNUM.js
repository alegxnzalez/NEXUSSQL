// SHIPMENT_STOP_REFNUM.js

window.SHIPMENT_STOP_REFNUM = {
  "tables": {
    "SHIPMENT_STOP_REFNUM": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The GID for the ship unit associated with the shipment. "
        },
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP",
          "info": "The stop number for the stop the reference number is linked to. "
        },
        "SHIPMENT_STOP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_STOP_REFNUM_QUAL",
          "info": "The shipment reference qualifier GID defining the reference type. "
        },
        "SHIPMENT_STOP_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The shipment stop reference value. "
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
