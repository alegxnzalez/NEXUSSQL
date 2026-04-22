// ESG_EMISSION_TYPE.js

window.ESG_EMISSION_TYPE = {
  "tables": {
    "ESG_EMISSION_TYPE": {
      "description": "This table stores the types of emissions, like CO2, CO2e, and NO2, that are emitted by a business.",
      "columns": {
        "ESG_EMISSION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The globally unique ID of an emission type."
},
        "ESG_EMISSION_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The unique ID of an emission type for a specific domain."
},
        "ESG_EMISSION_TYPE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the emission type that is emitted."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the emission type."
},
        "EXTERNAL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "External code of the emission type."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "The release in which the record is added."
},
        "GWP_FACTOR": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The GWP (Global Warming Potential) factor describes the effect of a greenhouse gas in terms of carbon dioxide."
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
        "EMISSION_FACTOR",
        "ESG_ACTIVITY_D_EMISSION",
        "ESG_ACTIVITY_EMISSION",
        "ESG_ACT_TYPE_EMISSION"
]
    }
  }
};