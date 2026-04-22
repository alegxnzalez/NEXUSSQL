// SHIPMENT_INF_COST_QUAL.js

window.SHIPMENT_INF_COST_QUAL = {
  "tables": {
    "SHIPMENT_INF_COST_QUAL": {
      "columns": {
        "SHIPMENT_INF_COST_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SHIPMENT_INF_COST_QUAL_DESC": {
          "type": "VARCHAR2(250)",
          "nullable": true
},
        "SHIPMENT_INF_COST_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "SHIPMENT_INF_COST"
]
    }
  }
};