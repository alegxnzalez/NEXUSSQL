// P_SHIPMENT_SET_D.js

window.P_SHIPMENT_SET_D = {
  "tables": {
    "P_SHIPMENT_SET_D": {
      "description": "Shipments that are in a shipment set",
      "columns": {
        "P_SHIPMENT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_SHIPMENT_SET"
},
        "P_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_SHIPMENT",
          "info": "Specifies a shipment that is in the given shipment set"
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