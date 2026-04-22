// LANE_SUMMARY_CELL_D.js

window.LANE_SUMMARY_CELL_D = {
  "tables": {
    "LANE_SUMMARY_CELL_D": {
      "description": "Shipment detail behind a lane summary cell",
      "columns": {
        "LANE_SUMMARY_CELL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LANE_SUMMARY_CELL"
},
        "P_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_SHIPMENT",
          "info": "Specifies a shipment that falls into this time period"
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