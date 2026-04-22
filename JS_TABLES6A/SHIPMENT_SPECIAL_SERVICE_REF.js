// SHIPMENT_SPECIAL_SERVICE_REF.js

window.SHIPMENT_SPECIAL_SERVICE_REF = {
  "tables": {
    "SHIPMENT_SPECIAL_SERVICE_REF": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_SPECIAL_SERVICE",
          "info": "The GID for the ship unit associated with the shipment. "
        },
        "SHIPMENT_SPECIAL_SERVICE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_SPECIAL_SERVICE",
          "info": "The sequence for the shipment special service. "
        },
        "COST_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The cost reference GID for the shipment special service. "
        },
        "SHIPMENT_COST_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT_COST_QUAL",
          "info": "The shipment cost qualifier associated to the cost reference. "
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
