// ROUTE_TMPLT_LEG_ORDER_COMPAT.js

window.ROUTE_TMPLT_LEG_ORDER_COMPAT = {
  "tables": {
    "ROUTE_TMPLT_LEG_ORDER_COMPAT": {
      "description": "Only order releases that have refnum qual/value pair that matches the pairs in this table are candidates to be assigned to the Route Leg.",
      "columns": {
        "ROUTE_TEMPLATE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_TEMPLATE_LEG",
          "info": "Part of PK.  FK for Route Template Leg."
},
        "ORDER_RELEASE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_REFNUM_QUAL",
          "info": "Part of PK.  FK for Order Release Refnum Qual."
},
        "ORDER_RELEASE_REFNUM_VALUE": {
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