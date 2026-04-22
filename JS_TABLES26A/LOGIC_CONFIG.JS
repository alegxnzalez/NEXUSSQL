// LOGIC_CONFIG.js

window.LOGIC_CONFIG = {
  "tables": {
    "LOGIC_CONFIG": {
      "description": "A collection of related parameters that is treated as a single entity and can be shared by different parameter sets.  An example is MULTISTOP config.",
      "columns": {
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LOGIC_CONFIG_XID": {
          "type": "VARCHAR2(60)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "LOGIC_CONFIG_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOGIC_CONFIG_GROUP",
          "info": "Such as MULTISTOP"
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "DRIVER",
        "DRIVER_TYPE",
        "GTM_CAMPAIGN_TYPE",
        "GTM_DECLARATION_TYPE",
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_TYPE",
        "LOGIC_CONFIG_SET_D",
        "LOGIC_PARAMETER",
        "ML_PROJECT",
        "RATE_GEO",
        "RATE_OFFERING",
        "TRANSPORTATION_WORKBENCH"
]
    }
  }
};