// EMISSION_ALLOCATION_BASE.js

window.EMISSION_ALLOCATION_BASE = {
  "tables": {
    "EMISSION_ALLOCATION_BASE": {
      "description": "This table stores the information of which object is being allocated for emission, the emission value that is being allocated.",
      "columns": {
        "ALLOC_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Allocation Sequence for PK."
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIPMENT",
          "info": "Shipment ID carrying the order release."
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
      "fk_tables": [
        "EMISSION_ALLOCATION_OR_D",
        "EMISSION_ALLOC_ORL_D"
]
    }
  }
};