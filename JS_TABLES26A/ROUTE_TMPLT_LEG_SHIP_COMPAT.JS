// ROUTE_TMPLT_LEG_SHIP_COMPAT.js

window.ROUTE_TMPLT_LEG_SHIP_COMPAT = {
  "tables": {
    "ROUTE_TMPLT_LEG_SHIP_COMPAT": {
      "description": "Only shipments that have refnum qual/value pair that matches the pairs in this table are candidates to be assigned to this Route Leg.",
      "columns": {
        "ROUTE_TEMPLATE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_TEMPLATE_LEG",
          "info": "Part of PK.  FK for Route Template Leg."
},
        "SHIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REFNUM_QUAL",
          "info": "Part of PK.  FK for Shipment Refnum Qual."
},
        "SHIPMENT_REFNUM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Part of PK."
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