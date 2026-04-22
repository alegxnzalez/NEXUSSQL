// CR_PROJECT_P_SHIPMENT_SET.js

window.CR_PROJECT_P_SHIPMENT_SET = {
  "tables": {
    "CR_PROJECT_P_SHIPMENT_SET": {
      "description": "Table linking Shipment Sets to CR Projects.",
      "columns": {
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_PROJECT"
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