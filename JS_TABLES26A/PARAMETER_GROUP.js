// PARAMETER_GROUP.js

window.PARAMETER_GROUP = {
  "tables": {
    "PARAMETER_GROUP": {
      "description": "Specifies the groups of related planning parameters or logic parameters, such as BULK PLAN, COLLABORATION in Planning Parameter Set, or CONSOLIDATION, SEQUENCING in MULTISTOP config.",
      "columns": {
        "PARAMETER_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "PARAMETER_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "GTM_CODE_MAPPING_D",
        "LOGIC_PARAMETER_QUALIFIER",
        "PLANNING_PARAMETER_QUALIFIER"
]
    }
  }
};