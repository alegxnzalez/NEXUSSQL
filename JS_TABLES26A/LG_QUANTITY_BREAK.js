// LG_QUANTITY_BREAK.js

window.LG_QUANTITY_BREAK = {
  "tables": {
    "LG_QUANTITY_BREAK": {
      "description": "defines the quantity break for generate step function in the PLANNING_GUIDE table",
      "columns": {
        "LG_QUANTITY_BREAK_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "LOGISTICS_GUIDE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOGISTICS_GUIDE_TEMPLATE"
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE",
          "info": "for this transport mode, weight breaks are defined"
},
        "WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "for this weight break and the transport mode, cost/transit time infor will be generated in the PLANNING_GUIDE table, if this is not null"
},
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "for this volume break and the transport mode, cost/transit time infor will be generated in the PLANNING_GUIDE table, if this is not null"
},
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
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
},
        "NUM_REFERENCE_UNITS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Specifies the ERU quantity break to be rated when rating the network."
}
      },
      "fk_tables": [
        "LOGISTICS_GUIDE_AGGREGATE_DATA"
]
    }
  }
};