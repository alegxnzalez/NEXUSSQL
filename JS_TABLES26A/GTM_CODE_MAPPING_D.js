// GTM_CODE_MAPPING_D.js

window.GTM_CODE_MAPPING_D = {
  "tables": {
    "GTM_CODE_MAPPING_D": {
      "description": "External Code Mapping Details",
      "columns": {
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
        "GTM_CODE_MAPPING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CODE_MAPPING",
          "info": "GTM external code mapping GID"
},
        "PARAMETER_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PARAMETER_GROUP",
          "info": "Parameter group for the code mappings."
},
        "CODE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "GTM Code"
},
        "EXTERNAL_CODE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "External reference code"
}
      },
      "fk_tables": []
    }
  }
};