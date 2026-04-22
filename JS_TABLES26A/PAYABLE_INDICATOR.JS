// PAYABLE_INDICATOR.js

window.PAYABLE_INDICATOR = {
  "tables": {
    "PAYABLE_INDICATOR": {
      "columns": {
        "PAYABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid for the payable state"
},
        "PAYABLE_INDICATOR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Xid for the payable state"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Description for the Payable state"
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
        "DRIVER_SPECIAL_SERVICE",
        "DRIVER_TYPE_SPECIAL_SERVICE",
        "SHIPMENT_SPECIAL_SERVICE",
        "SPECIAL_SERVICE",
        "WORK_INVOICE_ACTIVITY"
]
    }
  }
};