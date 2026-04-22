// SHIP_SPEC_SVC_SEC_CHARGE_JOIN.js

window.SHIP_SPEC_SVC_SEC_CHARGE_JOIN = {
  "tables": {
    "SHIP_SPEC_SVC_SEC_CHARGE_JOIN": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_SPECIAL_SERVICE",
          "info": "The GID for the shipment. "
        },
        "SHIPMENT_SPECIAL_SERVICE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_SPECIAL_SERVICE",
          "info": "The sequence identifier for the special service record associated with the shipment. "
        },
        "SECONDARY_CHARGE_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT",
          "info": "The secondary charge shipment identifier that contains the cost elements and information for the charges. "
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
