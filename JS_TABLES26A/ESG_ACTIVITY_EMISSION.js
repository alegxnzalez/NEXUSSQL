// ESG_ACTIVITY_EMISSION.js

window.ESG_ACTIVITY_EMISSION = {
  "tables": {
    "ESG_ACTIVITY_EMISSION": {
      "columns": {
        "ESG_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY",
          "info": "The globally unique ID of an esg activity."
},
        "ESG_EMISSION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_EMISSION_TYPE",
          "info": "The globally unique ID of an emission type."
},
        "EMISSION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Amount of emission emitted during the activity."
},
        "EMISSION_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Emission in base unit of measure."
},
        "EMISSION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Unit of measure for emission."
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