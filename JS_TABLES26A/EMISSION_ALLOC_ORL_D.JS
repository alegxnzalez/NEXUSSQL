// EMISSION_ALLOC_ORL_D.js

window.EMISSION_ALLOC_ORL_D = {
  "tables": {
    "EMISSION_ALLOC_ORL_D": {
      "description": "This table stores the allocated emissions at order release line level.",
      "columns": {
        "ALLOC_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EMISSION_ALLOCATION_BASE",
          "info": "Allocation Sequence for PK."
},
        "EMISSION_ALLOC_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Allocation Detail Sequence for PK."
},
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "Order release line ID for which emissions are allocated."
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT",
          "info": "Shipment ID carrying the order release line."
},
        "ESG_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "ESG Activity of the shipment ID whose emissions are allocated."
},
        "ALLOCATED_CO2_EQ_EMISSION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Allocated CO2e Emission."
},
        "ALLOCATED_CO2_EQ_EMISSION_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Allocated CO2e emission in base unit of measure."
},
        "ALLOCATED_CO2_EQ_EMISSION_UOM": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Unit of Measure for the allocated CO2e emissions."
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