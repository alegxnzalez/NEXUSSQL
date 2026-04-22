// CR_LV_AGGREGATE_P_SHIPMENT.js

window.CR_LV_AGGREGATE_P_SHIPMENT = {
  "tables": {
    "CR_LV_AGGREGATE_P_SHIPMENT": {
      "description": "Table associating p_shipments with lane volume aggregates for Cooperative Routing.",
      "columns": {
        "CR_LV_AGGREGATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_LV_AGGREGATE"
},
        "P_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_SHIPMENT"
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