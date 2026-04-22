// SHIPMENT_ORDER_RELEASE_JOIN.js

window.SHIPMENT_ORDER_RELEASE_JOIN = {
  "tables": {
    "SHIPMENT_ORDER_RELEASE_JOIN": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "The GID for the shipment."
},
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The order release GID on the shipment for the equipment reference units used."
},
        "NUM_REFERENCE_UNITS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The number of reference units used."
},
        "IS_FIXED_NUM_REFERENCE_UNITS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A Y/N indicator to specify that these calculated fields should remain permanent after a shipment modification."
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The equipment reference units GID."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "The description of the equipment reference unit values."
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