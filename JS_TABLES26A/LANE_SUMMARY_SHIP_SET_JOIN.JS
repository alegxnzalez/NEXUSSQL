// LANE_SUMMARY_SHIP_SET_JOIN.js

window.LANE_SUMMARY_SHIP_SET_JOIN = {
  "tables": {
    "LANE_SUMMARY_SHIP_SET_JOIN": {
      "description": "Specifies the shipment sets from which a lane summary is built",
      "columns": {
        "LANE_SUMMARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LANE_SUMMARY"
},
        "P_SHIPMENT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_SHIPMENT_SET"
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